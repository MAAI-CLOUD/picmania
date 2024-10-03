import React from 'react'
import Div from '../Div'

export default function AuthorWidget({ src, name, description, nfotos }) {
  return (
    <Div className="cs-author_card text-center">
      <img src={src} alt="Aauthor" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Actualmente esta carpeta tiene <strong style={{fontSize:'26px'}}>{nfotos}</strong> Fotos</p>
    </Div>
  )
}
