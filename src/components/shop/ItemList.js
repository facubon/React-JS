
import React, {useEffect} from 'react'
import { products } from './products'

const ItemList = () => {


    useEffect(() => {
        getProducts().then ( response => {
            console.log(response);
        })

    }, [])

    const getProducts = () => { 

        return new Promise (resolve =>  { 
            setTimeout (()=>{

                resolve (products)
            },3000);
        })
    }
    

  return (
    <div>ItemListContainer</div>
  )

}


export default ItemList