import React from 'react'
import Carrousel from './styles/styles modules/Carrousel.js';
import Categorias from './styles/styles modules/Categorias.js';

import Promociones from './styles/styles modules/Promociones.js';




export default function Home() {
  return (
    <div>

        <Carrousel/>
        <Promociones/>
        <Categorias/>
    </div>
  )
}
