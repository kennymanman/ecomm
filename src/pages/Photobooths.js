import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/shopContext'
import Navigation from "../components/Navigation"
import { Link } from 'react-router-dom'

export default function Photobooths() {


    const { getCollectionProducts, collections} = useContext(ShopContext)

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getCollectionProducts()
      }, [getCollectionProducts])
      
      if (!collections) return <div>Loading.....</div>
      
      console.log(collections)
      console.log(collections[0]);



  return (
    <div>
        
      <Navigation/>  
        
        <h2 className='tracking-tighter text-5xl mt-10'>Photo Booths</h2>
        
        
        
        {collections.length > 0 && ( // Check if collections exist
        collections[2].products.map((product) => (


           <div className='grid grid-cols-3'> 

          <div  key={product.id}>
             
          <img className='object-fit w-full h-96 object-cover' src={product.images[0].src} alt=""  />

           <div>
            <h3>{product.title}</h3>
            <h3>₦{product.variants[0].price.amount}</h3>
            <Link to={`/products/${product.handle}`} key={product.id}   className="text-lg tracking-tighter text-green-500">
            <button className='bg-green-500 tracking-tighter text-black px-8 rounded-full'>Buy</button>
            </Link>
            </div> 

            
          

          </div>

        </div>  

        
        ))
      )}
  





        </div>
  )
}
