import { GetServerSideProps } from "next";
import React from "react";
import GalleryUploads from "../components/galeriaHtmlPage/page";
import decryptData from "../common/decrypt";
import { fetchAPI } from "../app/api/api";
import Galery from "../app/galleryUploads/page";
import '../app/scss/index.scss';
const GaleryComponentPage = ({ galerias }: any) => {
  const dataGalerias = galerias.data

  return (
    <>
      <Galery galerias={dataGalerias} />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ locale, query, req }) => {

  const cookieValueToken = Boolean(req.cookies.token)
  const ut = decryptData(req.cookies.ut)

  const cookieValueEmail = decryptData(req.cookies.email)

  try {
    const galerias = await fetchAPI(
      `/galerias?populate=*&filters[correoGaleria]=` + cookieValueEmail
    )

    return {
      props: {
        galerias,
        cookieValueEmail,
        ut
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
