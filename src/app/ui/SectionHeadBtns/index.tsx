import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Spacing from '../Spacing';
import Div from '../Div';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
import { getStrapiURL } from "../../../app/api/api";
import { useRouter } from 'next/router';
import JSZip from 'jszip';

export default function SectionHeadingBtns({ title, subtitle, btnLink, btnText, variant, children, id, fotos }) {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const clientUser = router.query.client;
  const baseUrl = getStrapiURL();
  const [archivos, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);

  const popUp = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setFiles(fileArray);
      const urls = fileArray.map((file) => URL.createObjectURL(file));
      setImages(urls);
    }
  };

  const enviarFormulario = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const files = formData.getAll("archivos");
    const fotosIds: string[] = [];
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fotoId = await subirArchivo(file as File, i + 1, files.length);
      fotosIds.push(fotoId);
    }
    await guardarFotos(fotosIds);
  };

  const subirArchivo = async (file: File, index: number, totalFiles: number) => {
    const form = new FormData();
    form.append("files", file);

    return new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`, true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * (100 / totalFiles);
          setProgress((prevProgress) => prevProgress + percentComplete);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response[0].id);
        } else {
          reject(new Error('Error al subir archivo'));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Error al subir archivo'));
      };

      xhr.send(form);
    });
  };

  const guardarFotos = async (fotosIds: string[]) => {
    const promises = fotosIds.map(async (fotoId) => {
      const JSONBody = JSON.stringify({
        data: {
          "foto": fotoId,
          "galeria": id,
        }
      });

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: headers,
        body: JSONBody,
        redirect: 'follow'
      };

      try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/fotos`, requestOptions);
        if (respuesta.status === 200) {
          return await respuesta.json();
        } else {
          throw new Error('Error al guardar la foto en la galería');
        }
      } catch (error) {
        throw error;
      }
    });

    try {
      await Promise.all(promises);
      Swal.fire({
        icon: 'success',
        timer: 5000,
        showCancelButton: false,
        showConfirmButton: false,
        text: 'Fotos agregadas a la galeria exitosamente!',
      });

      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        timer: 5000,
        showCancelButton: false,
        showConfirmButton: false,
        text: 'No se pudo generar el producto! favor verificar datos',
      });
    }
  };

  const handleDownloadAll = async () => {
    if (!fotos || !Array.isArray(fotos)) {
      console.error('Error: fotos no está definido o no es un array');
      return;
    }

    try {
      const zip = new JSZip();
      const downloadPromises: Promise<void>[] = [];

      fotos.forEach((item, index) => {
        const imageUrl = baseUrl + item.attributes.foto.data.attributes.url;
        const fileName = `imagen_${index + 1}.jpg`;

        const downloadPromise: any = fetch(imageUrl)
          .then(response => response.blob())
          .then(blob => zip.file(fileName, blob))
          .catch(error => console.error(`Error al descargar la imagen ${fileName}:`, error));

        downloadPromises.push(downloadPromise);
      });

      await Promise.all(downloadPromises);
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(zipBlob);
      link.download = 'imagenes.zip';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar las imágenes:', error);
    }
  };

  return (
    <Div >
      {clientUser && (
        <Link href='#' className="cs-center" onClick={handleDownloadAll}>
          <Div className="">
            <span className="cs-icon_btn">
              <Icon icon="fa-cloud-download" style={{ marginRight: '5px', fontSize: '30px', marginBottom: '10px' }} />
              Descargar
            </span>
          </Div>
        </Link>
      )}

      <Link href='#' className="cs-center" onClick={popUp}>
        <Div className="">
          <span className="cs-icon_btn">
            <Icon icon="fa-upload" style={{ marginRight: '5px', fontSize: '30px' }} />
            Cargar fotos
          </span>
        </Div>
      </Link>

      {showPopup && (
        <div className="popup" style={{ zIndex: 9999 }}>
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup} style={{ fontSize: '40px' }}>
              &times;
            </span>
            <h4>Cargar Fotos</h4>
            <form onSubmit={enviarFormulario}>
              <input type="file" name="archivos" multiple onChange={handleFileInputChange} required />
              <button type="submit" style={{
                padding: '10px 10px',
                backgroundColor: '#ff4a17',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}>Cargar</button>
            </form>
            <Spacing lg="30" md="5" />
            <div id="progress-container" style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
              <div id="progress-bar" style={{
                width: `${progress}%`,
                height: '20px',
                backgroundColor: '#76c7c0',
                transition: 'width 0.2s'
              }}></div>
            </div>
          </div>
        </div>
      )}
    </Div>
  );
}
