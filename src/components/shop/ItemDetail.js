import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './products'

const ItemDetail = () => {

   const  {id :itemId} = useParams ()
   const [item,setItem] =useState({})

    useEffect(() => {
     getItemsDetails ().then (response => {
        setItem (response)
     })
    }, [])
    



   const getItemsDetails = () => { 
     return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve( products.find ( p => p.id == itemId))

        },1000);
    })
    }


  return (
    <div className='text-center '> Caracteristicas del producto
        <div>nombre del producto: {item.nombre}</div>
        <div>Precio: {item.precio} $</div>
    </div>
  )
}

export default ItemDetail