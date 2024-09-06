import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/shopContext'
import Navigation from "../components/Navigation"
import { Link } from 'react-router-dom'
import galleriaimage from "../Img/galleriaimage.png"
import Footer from '../components/Footer'


export default function Lagalleria() {

    const { getCollectionProducts, collections} = useContext(ShopContext)

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getCollectionProducts()
      }, [getCollectionProducts])
      
      if (!collections) return <div>Loading.....</div>
      
      console.log(collections)
      console.log(collections[0]);






  return (


    <>

    <div className='h-screen w-full relative'>

      <img className='h-full w-full object-cover absolute' src={galleriaimage} alt=""  />


    <Navigation/>  



<h1 className='tracking-tighter text-5xl relative text-center font-italic mt-80'>Introducing the all new</h1>

<h1 className='tracking-tighter text-9xl relative text-center font-regular text-white'>La Galleria</h1>

<p className='tracking-tighter relative font-apfel mx-48 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


<div className='text-center mt-9'>
<button className='rounded-md bg-black tracking-tighter text-lg px-28 py-1  border-1 relative  text-white '>Coming Soon</button>
</div>






     <div className='grid grid-cols-3 gap-3'>

       {/* This is a seperate collection, to change the collection change the number in collections[?].products.map */}
{/* 
        {collections.length > 0 && ( // Check if collections exist
        collections[0].products.map((product) => (

         
<div key={product.id}>
             
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
      )}  */}

      
     </div>   
        
        

        </div>




<Footer/>

</>
  )
}
