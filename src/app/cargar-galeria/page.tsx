'use client';
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cookies from 'js-cookie';
import router from "next/router";
import decryptData from "../../common/decrypt";
import Spacing from "../../app/ui/Spacing";
import Div from "../../app/ui/Div";
import { Icon } from "@iconify/react";
import SectionHeading from "../../app/ui/SectionHeading";
import Link from "next/link";

const GenerarTiendahtmlForm = ({ categorias }: any) => {
    const [isActive, setIsActive] = useState(true);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const cookieValueEmail = decryptData(Cookies.get("email"));

    function enviarFormulario(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const formValues = Object.fromEntries(formData)
        subirArchivo(formValues)
    }

    function subirArchivo(formValues: { [k: string]: FormDataEntryValue }) {
        const form = new FormData()
        form.append('files', formValues.imagenUrl)
        form.append('files', formValues.avatar)
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`, {
            method: 'POST',
            body: form
        }).then(async (response) => {
            await guardarTienda(response, formValues)
        })
    }

    async function guardarTienda(response: Response, formValues: { [k: string]: FormDataEntryValue }) {
        const data = await response.json()

        const JSONBody = JSON.stringify({
            data: {
                "portadaGaleria": data[0].id,
                "nombreGaleria": formValues.nombreGaleria,
                "privado": isActive,
                "correoGaleria": cookieValueEmail,
                "descripcionGaleria": formValues.descGaleria,
            }
        })

        const headers = new Headers()
        headers.append("Content-Type", "application/json")

        const requestOptions: any = {
            method: 'POST',
            headers: headers,
            body: JSONBody,
            redirect: 'follow'
        }
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/galerias`, requestOptions)
            .then((respuesta) => {
                if (respuesta.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        timer: 5000,
                        showCancelButton: false,
                        showConfirmButton: false,
                        text: 'Galeria generada exitosamente!',
                    })
                    window.location.href = '/'
                } else {
                    Swal.fire({
                        icon: 'error',
                        timer: 5000,
                        showCancelButton: false,
                        showConfirmButton: false,
                        text: 'No se pudo generar la Galeria! favor verificar datos',
                    })
                }
            })
            .catch(() => {

            })

    }

    const [imagePortada, setImagePortada] = useState(null);
    const handleImagePortada = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onload = () => {
                setImagePortada(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    //asigna url dinamica
    const [inputText, setInputText] = useState('');
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            const friendlyUrl = extractFriendlyUrl(url);
            setInputText(friendlyUrl);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    const handleInputChange = (event: any) => {
        const text = event.target.value;
        const friendlyUrl = generateFriendlyUrl(text);
        setInputText(friendlyUrl);

    };

    const generateFriendlyUrl = (text: any) => {
        const formattedText = text.toLowerCase().replace(/\s+/g, '-');
        const cleanText = formattedText.replace(/[^\w\-]+/g, '');
        return cleanText;
    };
    const extractFriendlyUrl = (url: any) => {
        const parts = url.split('/');
        const friendlyUrl = parts[parts.length - 1];
        return friendlyUrl;
    };

    const [value, setValue] = useState('');

    const handleInputNumeros = (e: any) => {
        const inputValue = e.target.value;
        // Utiliza una expresión regular para permitir solo números
        const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
        setValue(sanitizedValue);
    };


    return (

        <><Spacing lg="150" md="80" /><section
            className="login-area pt-40 pb-100 wow"
            data-wow-duration=".8s"
            data-wow-delay=".5s"
        >
            <Div className="container">
                <Div className="row">
                    <SectionHeading
                        title="Cargar Galeria"
                        subtitle="Upload Gallery" btnLink={undefined} btnText={undefined} variant={undefined} children={undefined} />
                    <Spacing lg="30" md="5" />
                    <Div className="col-lg-12">
                        <form onSubmit={enviarFormulario} className="row">
                            <Div className="col-sm-6">
                                <label htmlFor="name" className="cs-primary_color">
                                    Imagen de Portada: <span>*</span>
                                </label>
                                <input
                                    className="entrada"
                                    type="file"
                                    id="imagenUrl"
                                    name="imagenUrl"
                                    required
                                    onChange={handleImagePortada} />
                                {imagePortada &&
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={imagePortada} alt="Imagen" />
                                    </div>}
                                <Spacing lg="20" md="20" />
                                <label htmlFor="name" className="cs-primary_color">
                                    Nombre Galeria <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nombreGaleria"
                                    name="nombreGaleria"
                                    className="cs-form_field"
                                    required />
                                <Spacing lg="20" md="20" />
                                <label htmlFor="name" className="cs-primary_color">
                                    Descripción Galeria <span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="descGaleria"
                                    name="descGaleria"
                                    className="cs-form_field"
                                    required />
                                <Spacing lg="20" md="20" />
                            </Div>


                            <label htmlFor="galeria" className="form-check-label">
                                Galeria Privada
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center' }}>

                                <p style={{ marginRight: '10px' }}>
                                    {isActive ? 'Activado' : 'Desactivado'}
                                </p>
                                <label className="switch">
                                    <input type="checkbox" checked={isActive} onChange={handleToggle} />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <Div className="col-sm-12">
                                <button className="cs-btn cs-style1">
                                    <span>Cargar</span>
                                    <Icon icon="bi:arrow-right" />
                                </button>
                            </Div>
                        </form>
                    </Div>
                </Div>
            </Div>

        </section>

        </>
    );

};

export default GenerarTiendahtmlForm;
