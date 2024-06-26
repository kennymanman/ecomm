import React, {useEffect, useState} from 'react'
import {createClient} from 'contentful'
import { Link, useParams } from 'react-router-dom'



export default function EventDetails() {

 

  const client = createClient({space: "tftlhnwhadc4" , accessToken:
  "Uf89F9d745mgQqmWCzhUv-aLv-Vs9246o-MHYkfGYO0"})

  const [eventFullDetails, setEventFullDetails] = useState([])


  const {id} = useParams()

useEffect(()=> {

const getEntryById = async () => {
try {
await client.getEntry(id).then((entries) => {
      console.log(entries)
      setEventFullDetails(entries)
})
  
} catch (error) {

    console.log(error)
  }

      } 

      getEntryById()
    },[])


    console.log("Check", eventFullDetails)


  return (
    <div
    
    >EventDetails







     <p className=''>{eventFullDetails?.fields?.eventTitle}</p>
 
    <img src={eventFullDetails?.fields?.eventImage.fields.file.url} alt="" />  

    {/* <img src={eventFullDetails?.fields?.eventImages[0].fields.file.url} alt="" />  */}




    <p className='font-bold tracking-tighter mt-6'>Event Date</p>

{eventFullDetails?.fields?.eventDate}




<p className='font-bold tracking-tighter mt-6'>Location</p>

{eventFullDetails?.fields?.eventLocation.lat}
{eventFullDetails?.fields?.eventLocation.lon}




<p className='font-bold tracking-tighter mt-6'>Early Bird Ticket</p>

{eventFullDetails?.fields?.ticketPrices}




<p className='font-bold tracking-tighter mt-6'>Regular Ticket</p>

{eventFullDetails?.fields?.ticketPriceTwo}



<p className='font-bold tracking-tighter mt-6'>VIP Ticket</p>

{eventFullDetails?.fields?.ticketPriceThree}



<p className='font-bold tracking-tighter mt-6'>Event description</p>

{eventFullDetails?.fields?.eventSummary} 



<div>
<a target="_blank" href={eventFullDetails?.fields?.ticketLink}><button className='bg-black px-20 mt-6 py-4 rounded-md text-white tracking-tighter'>Get Ticket</button></a>
</div>







    </div>
  )
}
