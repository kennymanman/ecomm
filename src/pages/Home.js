import React, {useContext, useEffect, useState} from 'react'
import Navigation from '../components/Navigation'
import { Link } from "react-router-dom"
import { ShopContext } from '../context/shopContext'
import lifestyleimageone from "../assets/lifestyleimageone.jpg"
import {createClient} from 'contentful'







export default function Home() {



  //This is for the Shopify-buy to display all product.
  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
    return () => {

    }
  }, [fetchAllProducts])








//This is for Contentful CMS. change the space and accessToken
  const client = createClient({space: "tftlhnwhadc4" , accessToken:
  "Uf89F9d745mgQqmWCzhUv-aLv-Vs9246o-MHYkfGYO0"})
 
 const [eventPosts, setEventPosts] = useState([])

useEffect (()=> {
const getAllEntries = async () => {
try {

 await client.getEntries().then((entries) => {
     console.log(entries)
     setEventPosts(entries)
 })

} catch(error) {

 console.log("error")
}

}
getAllEntries()
}, [])








  return (

    <>

    {/* First Div  */}




<div className='h-screen w-full relative'>

    {/*Image Background  */}
<img className='h-full w-full object-cover absolute' src={lifestyleimageone} alt="" />
    
<Navigation />

{/* Heading */}
<h1 className='text-white tracking-tighter text-8xl relative text-center'>Life Of The Party</h1>




<div className='relative flex justify-between mx-72 mt-96 '>

<div className='flex'>
  <h2 className='text-black tracking-tighter'>Party</h2>
  <Link to="/Photobooths" >
 <h2 className='text-6xl tracking-tighter text-black hover:text-red-600'>PhotoBooths</h2>
 </Link>
</div>


<div className='flex'>
  <h2 className='text-black tracking-tighter'>Event</h2>
  <Link to="/Filters" >
 <h2 className='text-6xl tracking-tighter text-black'>Filters</h2>
 </Link>
</div>




<div className='flex'>
  <h2 className='text-black tracking-tighter'>Pictures</h2>
  <Link to="/Lagalleria" >
 <h2 className='text-6xl tracking-tighter text-black'>La Galleria</h2>
 </Link>
</div>

</div>




<div className='relative flex justify-between text-center mx-72'>

<div className='flex'>
  <h2 className='text-black tracking-tighter'>Shop</h2>
  <Link to="/Shop" >
 <h2 className='text-6xl tracking-tighter text-black'>Store</h2>
 </Link>
</div>



<div className='flex'>
  <h2 className='text-black tracking-tighter'>Our bio</h2>
  <Link to="/EventList" >
 <h2 className='text-6xl tracking-tighter text-black'>Events</h2>
 </Link>
</div>




<div className='flex'>
  <h2 className='text-black tracking-tighter'>Need help?</h2>
  <Link to="/Contact" >
 <h2 className='text-6xl tracking-tighter text-black'>Contact</h2>
 </Link>
</div>


</div>

</div>









{/* Second Section */}

<div className='bg-orange-50 relative px-2'>
 
 <h2 className='text-8xl font-bold tracking-tighter text-red-600 py-6'>All Products display</h2>





{/* All products from shopify buy displayed here, but sliced only 4 items */}
 <div className='grid grid-cols-4 gap-3 '>
 {products.slice(0,4).map(product => (

  
<Link to={`/products/${product.handle}`} key={product.id}   className="">

  <div className='w-80 h-96 relative grid '>
<img className='h-full w-full object-cover  absolute' src={product.images[0].src} alt="" />


<p className='relative tracking-tighter text-xl px-2 '>{product.title}</p>
<p className='relative tracking-tighter text-xl px-2 place-self-end'>₦{product.variants[0].price.amount}</p>

</div>

</Link>

 ))}

</div>



<hr className='border-black my-7'/>
  </div>
        










{/* Events Section data display from Contentful */}
<div className='grid grid-cols-3 gap-2'>


{eventPosts?.items?.map((post) =>
  
<div key={post.sys.id}>

 <div className='w-70 h-96'>
 <img className='w-fit h-fit object-cover' src={post.fields.eventImage.fields.file.url} alt={post.fields.eventTitle} /> 
</div>
 <p className='text-3xl tracking-tighter'>{post.fields.eventTitle}</p> 

 <div className='flex gap-2'>
 <p className='text-xl tracking-tighter px-2 border-black border-2 rounded-full'>{post.fields.tagOne}</p> 
 <p className='text-xl tracking-tighter px-2 border-black border-2 rounded-full'>{post.fields.tagTwo}</p>
 </div>

{/* Div for button */}
<div>
<Link
to={`/eventDetails/${post.sys.id}`}>
  <button className='bg-black px-20 mt-6 py-4 rounded-md text-white tracking-tighter'>See More</button>
</Link>
</div>

</div>

  )}

</div>








{/* Div for Klaviyo Email Newsletter, copy script from Klaviyo */}
<div className='h-fit bg-orange-50 py-20'>

<script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RuSVyp"></script>

<div class="klaviyo-form-TW8mF2">




</div>


</div>













        
        
        
        </>
  )
}

