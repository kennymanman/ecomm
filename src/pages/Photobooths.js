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


    <div className='px-5 '>
        
      <Navigation/>  
        
        <h2 className='tracking-tighter text-7xl mt-10 font-italic'>Photo Booths</h2>
        
        


{/* 
<div className='grid grid-cols-3'>

        
        {collections.length > 0 && ( // Check if collections exist
        collections[2].products.map((product) => (


          //  <div className='grid grid-cols-3'> 

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

        
        ))
      )}
  


</div> */}




<div className='grid grid-cols-3 mt-8'>


{collections.length > 0 && ( // Check if collections exist
        collections[2].products.map((product) => (


<>

          <div className='col-span-1'> 
      <h1 className='font-apfel tracking-tighter text-3xl '>{product.title}</h1>

      <h1 className=' tracking-tighter text-4xl font-italic'>{product.variants[0].price.amount}</h1>

      <h1 className=' tracking-tighter text-lg font-apfel mt-10'>details: {product.description}</h1>
            </div>






<div className='col-span-2'>

<img className='object-fit w-full h-96 object-cover' src={product.images[0].src} alt=""  />

</div>
    




    
</>



        ))
      )}



</div>







        </div>
  )
}
