import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useParams, useNavigate } from 'react-router-dom';


export default function Contact() {

  const navigate = useNavigate();


  return (
    <div className='bg-base-color'>
    
     <Navigation/>
    

     <div className='flex gap-2 pl-3'>
      <button onClick={() => navigate(-1)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

      </button>

      <p className='tracking-tighter text-lg'>back</p>

</div>







    
    <div className='grid grid-cols-3 gap-3 mx-3'>

      <div className='col-span-1'>
     <h2 className='text-5xl tracking-tighter font-suisse'>Contact</h2>
      </div>



      <div className='col-span-1'>

        <h2 className='tracking-tighter font-suisse text-lg '>+234 902659015</h2>
        <h2 className='tracking-tighter font-suisse text-lg '>+234 902659015</h2>
        <h2 className='tracking-tighter font-suisse text-xl '>info@famousandunknown.com</h2>


        <h2 className='tracking-tighter  text-lg mt-8 '>ADDRESS</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>92, Lanre Awolokun Gbagada Phase 2, Lagos, Nigeria</h2>

        <h2 className='tracking-tighter  text-lg mt-8 '>INDEX</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>Home</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>Event Filters</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>La Galleria</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>PhotoBooths</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>Store</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>Events</h2>

        <h2 className='tracking-tighter  text-lg mt-8 '>SOCIAL</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>Instagram</h2>
        <h2 className='tracking-tighter font-suisse text-lg  '>Twitter</h2>

     </div>

    </div>
    


    <Footer/>
    </div>
  )
}
