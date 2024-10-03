import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import Div from '../Div';
import SectionHeadingBtns from '../SectionHeadBtns';
import Spacing from '../Spacing';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import AuthorWidget from '../Widget/AuthorWidget'
import { getStrapiURL } from "../../../app/api/api";
import { useRouter } from 'next/router';
import SectionHeading from "../../../app/ui/SectionHeading";
// import QRDisplay from '../../src/app/ui/Gallery/QrGenerated.tsx'
import QRDisplay from './QrGenerated';
const baseUrl = getStrapiURL()

export default function MasonryGallery({ galeriaInfo, idGaleria, fotosData }) {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(300);
  const router = useRouter();

  const clientUser = router.query.client;

  const handleDownload = (imageUrl, fileName) => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([blob]));
        link.download = fileName;
        // Simular clic en el enlace para iniciar la descarga
        document.body.appendChild(link);
        link.click();
        // Limpiar el enlace
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error al descargar la imagen:', error));
  };
  const numeroDeFotos = Object.keys(fotosData).length;

  return (
    <>
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <AuthorWidget
                src={baseUrl + galeriaInfo.portadaGaleria.data.attributes.url}
                name={galeriaInfo.nombreGaleria}
                description={galeriaInfo.descripcionGaleria}
                nfotos={numeroDeFotos}
              />
              <Spacing lg="10" md="5" />
              <SectionHeadingBtns title={galeriaInfo.nombreGaleria} subtitle="Our Portfolio" id={idGaleria} fotos={fotosData} />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6" style={{zIndex:0}}>
            <SectionHeading
              title="Compatir Experiencias"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              {/* <p className="cs-m0">
                Para compartir este espacio y comenzar a subir contenido, simplemente comparte el siguiente código QR con tus participantes. Así podrán empezar a cargar sus propias fotos
              </p> */}
              <Spacing lg="30" md="20" />
              <QRDisplay />
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">


          <Div className="cs-filter_menu cs-style1">
            {/* <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul> */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="45" />

      {
        clientUser &&
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="cs-masonry_4_col"
          download={false}
        >
          {
            fotosData.slice(0, itemShow).map((item, index) => (
              <Div
                href={baseUrl + item.attributes.foto.data.attributes.url}
                className={'all'}
                key={index}
              >
                <Div
                  className="cs-portfolio cs-style1 cs-type2"
                  style={{ height: `${item.height}px` }}
                >
                  <Div className="cs-lightbox_item">
                    <img
                      src={baseUrl + item.attributes.foto.data.attributes.url}
                      alt={item.title}
                      style={{ height: `${item.height}px` }}
                    />
                  </Div>
                  <Div className="cs-portfolio_hover" />
                  <span className="cs-plus" />
                  <Div
                    className="cs-portfolio_bg cs-bg"
                    style={{ backgroundImage: `url("${baseUrl + item.attributes.foto.data.attributes.url}")` }}
                  />
                  <Div className="cs-portfolio_info">
                    <Div className="cs-portfolio_info_bg cs-accent_bg" />
                    <h2 className="cs-portfolio_title">{item.attributes.galeria.data.attributes.nombreGaleria}</h2>
                    <Div className="cs-portfolio_subtitle">{item.attributes.galeria.data.attributes.descripcionGaleria}</Div>
                    <button
                      className="download-button"
                      style={{
                        position: 'absolute',
                        top: '10px', /* Ajusta la posición vertical según sea necesario */
                        right: '10px', /* Ajusta la posición horizontal según sea necesario */
                        padding: '10px 10px',
                        backgroundColor: '#ff4a17', /* Cambia el color de fondo según tus preferencias */
                        color: '#fff', /* Cambia el color del texto según tus preferencias */
                        border: 'none',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease',
                      }}
                      onClick={() => handleDownload(baseUrl + item.attributes.foto.data.attributes.url, item.attributes.foto.data.attributes.url)}
                    >
                      Descargar
                    </button>
                  </Div>
                </Div>

              </Div>
            ))
          }

        </LightGallery>
      }

      <Div className="container">
        <Div className="text-center">
          {fotosData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}
