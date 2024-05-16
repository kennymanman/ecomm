import React, {useContext, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shopContext'
import Navigation from '../components/Navigation';
import VariantSelect from '../components/VariantSelect';



export default function ProductDetails() {

const {fetchAllProducts, products, product, addItemToCheckout, fetchProductWithHandle } = useContext(ShopContext)

const navigate = useNavigate();

let { handle } = useParams()


  useEffect(() => {
    fetchProductWithHandle(handle)
    .then(data => console.log(data))
  }, [fetchProductWithHandle, handle])

  useEffect(() => {
    fetchAllProducts()
    return () => {

    }
  }, [fetchAllProducts])


  if (!product.title) return <div>loading...</div>




console.log("products", product)

   
return (
    <div>
      <Navigation/>


 <button onClick={() => navigate(-1)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>






  
<h1 className='text-4xl tracking-tighter'>Name{product.title} </h1>
<img src={product.images[0].src} alt="" /> 

<p className=' tracking-tighter'>details: {product.description} </p>



<button  onClick={() => product.variants && addItemToCheckout(product.variants[0].id, 1) }>
Add to Cart
</button>



<button className='px-4 py-2 bg-orange-400 rounded-lg m-4 tracking-tighter ' onClick={() => addItemToCheckout(product.variants?.[0].id ?? product.id, 1)}>
Add to Cart
</button>


<button className='px-4 py-2 bg-orange-400 rounded-lg m-4 tracking-tighter ' onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
Add to Cart
</button>




<VariantSelect/>



    </div>
  )
}
