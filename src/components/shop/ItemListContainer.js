
import React, {useEffect,useState} from 'react'
import { products } from './products'
import ItemDetailContainer from './ItemDetailContainer'
import {collection, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import ItemDetail from './ItemDetail'

const ItemListContainer = () => {

 const [products, setProducts] = useState ([])
 const [loading, setloading] = useState(true)

 useEffect (() =>{
    getProducts()
 },[])

 const getProducts = () => { 
    const db = getFirestore ()
    const productsCollection = collection (db, 'products')
    getDocs (productsCollection).then(res => {
        const productsData = res.docs.map (d => ({id:d.id , ...d.data()}))
        console.log (productsData)
        setProducts(productsData)
        setloading(false)
    })
 }

  return (
    <>
     <div className='text-center'>Estos son los Cuatro productos de la pagina traidos desde FireBase. </div>


     <div> 
       
        { loading ? <h1>cargando productos...</h1>
        :
        products.map (p => <ItemDetail key={p.id}  {...p} />)
    } </div>

     
      
    </>
   
  )

}




export default ItemListContainer