'use client'
import { GetServerSideProps } from "next";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Spacing from "../../app/ui/Spacing";
import Div from "../../app/ui/Div";
import SectionHeading from "../../app/ui/SectionHeading";
import Portfolio from "../../app/ui/Portfolio";
import decryptData from "../../common/decrypt";
import { fetchAPI, getStrapiURL } from "../../app/api/api";
import Header from "../../app/ui/Header";
const baseUrl = getStrapiURL()

const GalleryUploads = ({ galeria }: any) => {
  const [itemShow, setItemShow] = useState(10);

  return (
    <>
      <Header variant={undefined} />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Galerias"
          subtitle="Gallery's"
          variant="cs-style1 text-center"
          btnLink={undefined}
          btnText={undefined}
          children={undefined}
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {galeria.slice(0, itemShow).map((item: any, index: number) => (
            <Div
              className={`${index === 0 || index === 3 || index === 4 ? 'col-lg-4' : 'col-lg-4'}`}
              key={index}
            >
              <Portfolio
                title={item.attributes.nombreGaleria}
                subtitle={item.attributes.descripcionGaleria}
                href={'fotos?id=' + item.id + '&galeria=' + item.attributes.nombreGaleria}
                src={getStrapiURL() + item.attributes.portadaGaleria.data.attributes.url}
                variant="cs-style1 cs-type1"
                hrefGuest={'fotos?id=' + item.id + '&galeria=' + item.attributes.nombreGaleria + '&client=true'}
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>
        <Div className="text-center">
          {galeria.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
              </span>
            </>
          )}
        </Div>
      </Div>
    </>
  );
};

export default GalleryUploads;