import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/shopContext'
import Navigation from "../components/Navigation"
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';



export default function Filters() {

    const { getCollectionProducts, collections} = useContext(ShopContext)

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

        getCollectionProducts()
      }, [getCollectionProducts])
      
      if (!collections) return <div>Loading.....</div>
      
      console.log(collections)
      console.log(collections[3]);





  return (


    <div className='bg-base-color'>


    <Navigation/>    


<div className='flex gap-2 pl-3'>
      <button onClick={() => navigate(-1)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

      </button>

      <p className='tracking-tighter text-xl text-gray-400 hover:text-black '>Go Back</p>

</div>







    <div className=' '>

      {/* This is a seperate collection, to change the collection change the number in collections[?].products.map */}

        {collections.length > 0 && ( // Check if collections exist
        collections[3].products.map((product) => (

         
<div key={product.id}>


<div className='flex  gap-4 md:flex-row h-screen mx-3 mb-8'>

  <div className='w-1/3 overflow-hidden '>

       <h2 className='font-suisse text-5xl tracking-tighter mt-4'>{product.title}</h2>
       <p className='tracking-tighter mt-4' >CATEGORY</p> 
       <h2 className='font-suisse text-xl tracking-tighter'>Background Effect</h2>
       <p className='tracking-tighter mt-4' >BEST FOR</p> 
       <h2 className='font-suisse text-xl tracking-tighter'>Birthdays</h2>
       <p className='tracking-tighter mt-4' >PRICE</p> 
       <h2 className='font-suisse text-xl tracking-tighter'>₦{product.variants[0].price.amount}</h2>
       <p className='tracking-tighter mt-4' >CHOICE DURATIONS</p> 
       <h2 className='font-suisse text-xl tracking-tighter'>2 Months or 1 Year or For Life</h2>
     

  </div>




  <div className='w-1/3 overflow-hidden  bg-slate-500'>
  <div className='col-span-1'>
  <img className='object-fit w-full h-full object-cover' src={product.images[0].src} alt=""  />
    </div>
  </div>



  <div className='w-1/3 overflow-hidden '>
  <p className='tracking-tighter mt-4' >BUILT FOR</p> 
  <h2 className='font-suisse text-xl tracking-tighter'>SnapChat</h2>
  <hr className='border-black my-2'/>
  <p className='tracking-tighter mt-4' >DESCRIPTION</p>
  <p className='font-suisse  tracking-tighter text-sm  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <hr className='border-black my-2'/>
  <p className='tracking-tighter mt-4' >TAGS</p>
  <p className='font-suisse  tracking-tighter text-sm  '>#butterfly, #sunset, #magic </p>
  <hr className='border-black my-2'/>
  <p className='tracking-tighter mt-4' >DELIVERY TIME</p>
  <p className='font-suisse  tracking-tighter text-sm  '>48 hours </p>

  <hr className='border-black my-2'/>
  <p className='tracking-tighter mt-4' >INSTRUCTIONS</p>
  <p className='font-suisse text-sm  tracking-tighter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


  <Link to={`/products/${product.handle}`} key={product.id}>
  <button className='bg-black w-full text-white tracking-tighter rounded-sm my-5 py-3' >See More</button>
  </Link>
  </div>



</div>



             
           
</div>


))
      )} 
   
     </div>   
        
        


        <Footer/>

        </div>
  )
}
