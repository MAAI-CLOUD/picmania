
import { GetServerSideProps } from "next";
import React from "react";
import GalleryUploads from "../components/galeriaHtmlPage/page";
import decryptData from "../common/decrypt";
import { fetchAPI } from "../app/api/api";
import '../app/scss/index.scss';
import FotosComponent from "../components/fotos/page";
import { useRouter } from 'next/router';
import './main.scss'
const GaleryComponentPage = ({ galerias, idGaleria, fotos }: any) => {
  const dataGalerias = galerias.data
  const dataFotos = fotos.data
  const router = useRouter();

  return (
    <>
      <FotosComponent galeria={dataGalerias} idgaleria={idGaleria} fotos={dataFotos} />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ locale, query, req }) => {

  const cookieValueToken = Boolean(req.cookies.token)
  const ut = decryptData(req.cookies.ut)

  const cookieValueEmail = decryptData(req.cookies.email)
  const idGaleria = query.id
  const galeriaName = query.galeria
  try {
    const galerias = await fetchAPI(
      `/galerias/${query.id}?populate=*`
    )

    const fotos = await fetchAPI(
      `/fotos?filters[galeria]=${idGaleria}&populate=*`
    )

    return {
      props: {
        galerias,
        cookieValueEmail,
        ut,
        idGaleria,
        fotos,
      },
    }
  } catch (e: any) {
    console.error(
      "servicios.tsx::getServerSideProps. No se pudieron obtener los datos",
      e
    )
    return {
      notFound: true,
    }
  }
}
export default GaleryComponentPage;
