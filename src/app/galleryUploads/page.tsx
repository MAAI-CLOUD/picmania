'use client'
import React from "react";
import GaleryComponent from "../../components/galleryUploads/page";
const Galery = ({ galerias }) => {

  return (
    <>
      <GaleryComponent galeria = {galerias}/>
    </>
  );
};

export default Galery;
