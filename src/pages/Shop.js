import React, {useContext, useEffect} from 'react'
import { ShopContext } from '../context/shopContext'
import Navigation from "../components/Navigation"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";




export default function Shop() {

const {fetchAllProducts, products} = useContext(ShopContext)





useEffect(() => {

  fetchAllProducts()
}, [fetchAllProducts])

if (!products) return <div>Loading.....</div>

console.log(products)






  return (
    <div className='bg-orange-50'>

      <Navigation/>

 
      
      <h1 className="text-5xl tracking-tighter my-9">SHOP.</h1>

      {
        products.map(product => (

          <div key={product.id} >
          <img src={product.images[0].src} alt=""  />
          
        


            
          <h2>${product.variants[0].price.amount}</h2>
         



        

            <Link to={`/products/${product.handle}`} key={product.id}   className="text-lg tracking-tighter text-green-500">
            {product.title} 
            </Link>




            </div>

          

          
        ))
      }




    </div>
  )
}
