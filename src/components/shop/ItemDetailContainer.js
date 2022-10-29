import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetailContainer = ({id,nombre,precio}) => {
  return (

    <Link to={`/shop/item/${id}`}>
    <div className='p-5 text-center'>  
        <div>ID del prodsdsdsucto: {id}</div>
        <div>Nombre del producto: {nombre}</div>
        <div>Precio: {precio}$</div>
    </div>
    </Link>
  )
}

export default ItemDetailContainer