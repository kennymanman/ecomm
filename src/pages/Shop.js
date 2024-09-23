import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/shopContext'
import Navigation from "../components/Navigation"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'



export default function Shop() {

    const { getCollectionProducts, collections} = useContext(ShopContext)

    const [products, setProducts] = useState([]);


    useEffect(() => {

        getCollectionProducts()
      }, [getCollectionProducts])
      
      if (!collections) return <div>Loading.....</div>
      
      console.log(collections)
      console.log(collections[1]);





  return (


    <div className='bg-base-color px-2'>


    <Navigation/>    


    <h1 className="text-8xl tracking-tighter font-italic mt-7">Ngozi</h1>

    <hr className='border-black'/>


   
    <h1 className="text-5xl tracking-tighter font-regular mt-7 text-center">Phone Cases</h1>
    <h2 className="text-4xl tracking-tighter font-italic mt-1 text-center text-subtext-color">Shop phone cases designed by Famous & Unknown</h2>
    {/* <p className='tracking-tighter font-suisse text-center mx-60' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
   





    <div className='grid grid-cols-3 gap-3 mt-5'>

      {/* This is a seperate collection, to change the collection change the number in collections[?].products.map */}

        {collections.length > 0 && ( // Check if collections exist
        collections[1].products.map((product) => (

  
  
  <div key={product.id}>

<div className='relative w-full h-96 grid' >
             
          <img className=' w-full h-full object-cover absolute' src={product.images[0].src} alt=""  />
  

<div className='text-center content-end'>
            <Link to={`/products/${product.handle}`} key={product.id}   className="text-lg tracking-tighter  ">
              <button className='bg-black tracking-tighter py-2 rounded-md w-96 relative text-white mb-2 opacity-0 hover:opacity-100 '>Buy</button>
              </Link>
</div>

           
</div>


<div className='text-center '>
              <h3 className='tracking-tighter font-regular text-subtext-color text-2xl'>{product.title}</h3>
              <h3 className='tracking-tighter font-suisse text-lg'>₦ {product.variants[0].price.amount}</h3>
             
  </div>
</div>

))
      )} 
   
     </div>   


















     <h1 className="text-5xl tracking-tighter font-regular mt-20 text-center">Caps</h1>
    <h2 className="text-4xl tracking-tighter font-italic mt-1 text-center text-subtext-color">Shop caps designed by Famous & Unknown</h2>
    {/* <p className='tracking-tighter font-suisse text-center mx-60 text-sm' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
   





    <div className='grid grid-cols-3 gap-3 mt-5'>

      {/* This is a seperate collection, to change the collection change the number in collections[?].products.map */}

        {collections.length > 0 && ( // Check if collections exist
        collections[2].products.map((product) => (

  
  
  <div key={product.id}>

<div className='relative w-full h-96 grid' >
             
          <img className=' w-full h-full object-cover absolute' src={product.images[0].src} alt=""  />
  

<div className='text-center content-end'>
            <Link to={`/products/${product.handle}`} key={product.id}   className="text-lg tracking-tighter  ">
              <button className='bg-black tracking-tighter py-2 rounded-md w-96 relative text-white mb-2 opacity-0 hover:opacity-100 '>Buy</button>
              </Link>
</div>

           
</div>


<div className='text-center '>
              <h3 className='tracking-tighter font-regular text-subtext-color text-2xl'>{product.title}</h3>
              <h3 className='tracking-tighter font-suisse text-lg'>₦ {product.variants[0].price.amount}</h3>
             
  </div>
</div>

))
      )} 
   
     </div>  




















     
    <h1 className="text-5xl tracking-tighter font-regular mt-7 text-center">Tote Bags</h1>
    <h2 className="text-4xl tracking-tighter font-italic mt-1 text-center text-subtext-color">Shop Tote bags designed by Famous & Unknown</h2>
    <p className='tracking-tighter font-suisse text-center mx-60' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
   





    <div className='grid grid-cols-3 gap-3 mt-5'>

      {/* This is a seperate collection, to change the collection change the number in collections[?].products.map */}

        {collections.length > 0 && ( // Check if collections exist
        collections[3].products.map((product) => (

  
  
  <div key={product.id}>

<div className='relative w-full h-96 grid' >
             
          <img className=' w-full h-full object-cover absolute' src={product.images[0].src} alt=""  />
  

<div className='text-center content-end'>
            <Link to={`/products/${product.handle}`} key={product.id}   className="text-lg tracking-tighter  ">
              <button className='bg-black tracking-tighter py-2 rounded-md w-96 relative text-white mb-2 opacity-0 hover:opacity-100 '>Buy</button>
              </Link>
</div>

           
</div>


<div className='text-center '>
              <h3 className='tracking-tighter font-regular text-subtext-color text-2xl'>{product.title}</h3>
              <h3 className='tracking-tighter font-suisse text-lg'>₦ {product.variants[0].price.amount}</h3>
             
  </div>
</div>

))
      )} 
   
     </div>  

















     <h1 className="text-5xl tracking-tighter font-regular mt-7 text-center">T-Shirts</h1>
    <h2 className="text-4xl tracking-tighter font-italic mt-1 text-center text-subtext-color">Shop Tshirts designed by Famous & Unknown</h2>
    <p className='tracking-tighter font-suisse text-center mx-60' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
   





    <div className='grid grid-cols-3 gap-3 mt-5'>

      {/* This is a seperate collection, to change the collection change the number in collections[?].products.map */}

        {collections.length > 0 && ( // Check if collections exist
        collections[1].products.map((product) => (

  
  
  <div key={product.id}>

<div className='relative w-full h-96 grid' >
             
          <img className=' w-full h-full object-cover absolute' src={product.images[0].src} alt=""  />
  

<div className='text-center content-end'>
            <Link to={`/products/${product.handle}`} key={product.id}   className="text-lg tracking-tighter  ">
              <button className='bg-black tracking-tighter py-2 rounded-md w-96 relative text-white mb-2 opacity-0 hover:opacity-100 '>Buy</button>
              </Link>
</div>

           
</div>


<div className='text-center '>
              <h3 className='tracking-tighter font-regular text-subtext-color text-2xl'>{product.title}</h3>
              <h3 className='tracking-tighter font-suisse text-lg'>₦ {product.variants[0].price.amount}</h3>
             
  </div>
</div>

))
      )} 
   
     </div>  






        
        <Footer/>

        </div>
  )
}
