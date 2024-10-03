
import React from 'react';
import Link from "next/link";;
import Div from '../Div';
import './portfolio.scss';

export default function Portfolio({ href, src, title, subtitle, variant, hrefGuest }) {
  return (
    <Div
      href={'#'}
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          {/* <Div className="cs-portfolio_subtitle">{subtitle}</Div> */}
          <Div className="cs-portfolio_subtitle">
            <Link href={hrefGuest}>
              <button
                className="download-button"
                style={{
                  top: '10px', /* Ajusta la posición vertical según sea necesario */
                  right: '10px', /* Ajusta la posición horizontal según sea necesario */
                  padding: '5px 5px',
                  marginBottom: '10px',
                  backgroundColor: '#181818', /* Cambia el color de fondo según tus preferencias */
                  color: '#fff', /* Cambia el color del texto según tus preferencias */
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Galeria Cliente
              </button>
            </Link>
            <br />
            <Link href={href}>
              <button
                className="download-button"
                style={{
                  top: '10px', /* Ajusta la posición vertical según sea necesario */
                  right: '10px', /* Ajusta la posición horizontal según sea necesario */
                  padding: '5px 5px',
                  backgroundColor: '#181818', /* Cambia el color de fondo según tus preferencias */
                  color: '#fff', /* Cambia el color del texto según tus preferencias */
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Galeria Invitado
              </button>
            </Link>
          </Div>
        </Div>
      </>
    </Div>
  );
}
