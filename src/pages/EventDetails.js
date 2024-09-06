import React, {useEffect, useState} from 'react'
import {createClient} from 'contentful'
import { Link, useParams, useNavigate } from 'react-router-dom'
import clouds from "../Img/clouds.png"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import GoogleMapReact from 'google-map-react';



export default function EventDetails() {

 

  const client = createClient({space: "tftlhnwhadc4" , accessToken:
  "Uf89F9d745mgQqmWCzhUv-aLv-Vs9246o-MHYkfGYO0"})

  const [eventFullDetails, setEventFullDetails] = useState({})

  const navigate = useNavigate();


  const {id} = useParams()

  console.log(id ,"check")

  // const defaultProps = {
  //   center: {
  //     lat: 6.422842,
  //     lng: 3.452599
  //   },
  //   zoom: 11
  // };




useEffect(()=> {

const getEntryById = async () => {
try {
await client.getEntry(id).then((entries) => {
      console.log(entries, "jaachi")
      console.log(defaultProps);
      setEventFullDetails(entries)
})
  
} catch (error) {

    console.log(error)
  }

      } 

      getEntryById()
    },[])



 

    const defaultProps = {
      center: {
        lat: eventFullDetails?.fields?.eventLocation.lat,
        lng: eventFullDetails?.fields?.eventLocation.lon,
      },
      zoom: 11
    };


  






  return (

 

<div className='bg-base-color'>


<Navigation/>


<div className='flex justify-between mx-3 my-3'>

<button onClick={() => navigate(-1)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>




<button className='tracking-tighter'>Want to host your own event?</button>

</div>



<hr className='border-black'/>

<div className='flex  gap-4 md:flex-row h-screen'>


<div className='w-1/2 overflow-hidden relative '>

  <img className='absolute h-full w-full object-cover' src={eventFullDetails?.fields?.eventImage.fields.file.url} alt="" />

</div>



<div className='w-1/2 overflow-y-auto'>



<div className='grid grid-cols-2 gap-2'>

 <h1 className='text-6xl tracking-tighter '>{eventFullDetails?.fields?.eventTitle}</h1>


{/* Date and Location Div */}
<div>
 <h1 className='text-xl tracking-tighter my-8'>date: Monday 12th August, 2024</h1>
 <h1 className='text-lg tracking-tighter '>92, lanre Awolokun Gbagada phase 2, Lagos. Beside Little Rock School</h1>
</div>


</div>


<div className='relative h-96 mt-10 '>
<img className='w-full h-full absolute object-cover' src={clouds} alt="" />
</div>



<div className='grid grid-cols-2'>

  <div className='col-span-1'>
  <h1 className='text-2xl tracking-tighter my-3'>Ticket Prices: </h1>
  <h1 className='text-xl tracking-tighter my-3'>Early Bird: ₦20000 </h1>
  <h1 className='text-xl tracking-tighter my-3'>Regular ticket: ₦20000 </h1>
  <h1 className='text-xl tracking-tighter my-3'>VIP Ticket: ₦20000 </h1>
  </div>


  <div className='col-span-1'>
    <p>{eventFullDetails?.fields?.eventSummary} </p>
  </div>

</div>





<div className='relative h-screen mt-10 '>
<img className='w-full h-full absolute object-cover' src={clouds} alt="" />
</div>




<div className='grid grid-cols-2'>

  <div className='col-span-1'>

  <h1 className='text-2xl tracking-tighter my-3'>DJ Appearence: </h1>
  <h1 className='text-xl tracking-tighter my-3'>DJ Splash </h1>
  <h1 className='text-xl tracking-tighter my-3'>DJ Kenzo </h1>
  <h1 className='text-xl tracking-tighter my-3'>DJ Kenzo {eventFullDetails?.fields?.eventLocation.lon} </h1>
  <h1 className='text-xl tracking-tighter my-3'>DJ Kenzo {eventFullDetails?.fields?.eventLocation.lat} </h1>
  </div>


  <div className='col-span-1'>
  <h1 className='text-2xl tracking-tighter my-3'>Event Rules </h1>
    <p className='tracking-tighter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  </div>

</div>





<div className='relative h-96 mt-10 '>
<img className='w-full h-full absolute object-cover' src={clouds} alt="" />

<GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}  
      >


        <div
          lat={eventFullDetails?.fields?.eventLocation.lat}
          lng={eventFullDetails?.fields?.eventLocation.lon}
          text="My Marker"
        />
      </GoogleMapReact>
</div>



<button className='bg-black w-full text-white tracking-tighter rounded-sm my-5 py-3'>Buy Ticket</button>

</div>










</div>



<Footer/>




















    </div>
  )
}
