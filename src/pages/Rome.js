import React from 'react'
import headingimage from "../Img/headingimage.png"
import Navigation from '../components/Navigation'
import { Link } from "react-router-dom"
import ReactCurvedText from 'react-curved-text';

function Rome() {
  return (

    <>
    
    

    <div className='h-screen w-full '>
   


        <img className='h-full w-full object-cover absolute' src={headingimage} alt=""  />

        <Navigation/>


        <h1 className=' tracking-tighter mt-5 text-5xl relative text-center'>Life Of The Party</h1>

<div className='relative '>
        <ReactCurvedText
          
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={50}
            reversed={false}
            text="Life Of The Party"
            textProps={{ style: { fontSize: 50 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />

        </div>





    <div className='relative flex justify-between mx-72 mt-96 '>

  <div className='flex'>
    <h2 className='text-black tracking-tighter'>Party</h2>
    <Link to="/Rome" >
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
    <Link to="/EventList" >
   <h2 className='text-6xl tracking-tighter text-black'>Contact</h2>
   </Link>
  </div>


</div>





</div>
    
    
    
    </>
   
  )
}

export default Rome