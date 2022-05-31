import React from 'react'
import './index.css'

export default function Footer(props) {
  
  return (
    <div className='pie'>{props.contenido !== undefined ? props.contenido : "nada"}</div>
  )
}
