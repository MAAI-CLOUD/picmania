'use client'
import MasonryGallery from "../../app/ui/Gallery/MasonryGallery";
import Spacing from "../../app/ui/Spacing";
import Header from "../../app/ui/Header";


export default function FotosComponent({ galeria, idgaleria, fotos }) {
  const oneGalery = galeria.attributes
  return (
    <>

      < Header variant={undefined} />
      <Spacing lg="150" md="80" />

      <MasonryGallery galeriaInfo={oneGalery} idGaleria={idgaleria} fotosData={fotos} />

      <Spacing lg="150" md="80" />
    </>
  );
}
