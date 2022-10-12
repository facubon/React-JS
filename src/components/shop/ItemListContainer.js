
import React, {useEffect,useState} from 'react'
import { products } from './products'
import ItemDetailContainer from './ItemDetailContainer'

const ItemListContainer = () => {

    const [items,setItems] = useState([])


    useEffect(() => {
        getProducts().then ( response => {
            console.log(response);
            setItems (response)
        })

    }, [])

    const getProducts = () => { 

        return new Promise (resolve =>  { 
            setTimeout (()=>{

                resolve (products)
            },1000);
        })
    }
    

  return (
    <>
     <div className='text-center'>Estos son los Cuatro productos de la pagina tardando 1 segundo </div>
     {items.map ( i => <ItemDetailContainer key={i.id} {...i} /> )}
    </>
   
  )

}




export default ItemListContainer