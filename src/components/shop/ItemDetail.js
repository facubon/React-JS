import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './products'

const ItemDetail = ({id,nombre,precio,imagen}) => {

 


  return (
    
    <div className='p-5 text-center'> Caracteristicas del producto
        <div>{nombre}</div>
        <div>{precio}</div>
          <div className='imagenDiv'>   <img className='p-5 imagenDetail' src={imagen}   /> </div> 
    </div>
    
  )
}

export default ItemDetail