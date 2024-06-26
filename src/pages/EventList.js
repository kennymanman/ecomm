import React, {useEffect, useState} from 'react'
import {createClient} from 'contentful'
import { Link } from 'react-router-dom'
// import * as contentful from 'contentful';

export default function EventList() {


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
    <div>EventList


  {eventPosts?.items?.map((post) =>
  
  <div key={post.sys.id}>

     <p className='text-3xl tracking-tighter'>{post.fields.eventTitle}</p>
 
    <img src={post.fields.eventImage.fields.file.url} alt={post.fields.eventTitle} />  

    {/* <img src={post.fields.eventImages[0].fields.file.url} alt={post.fields.eventTitle} />  */}

<p className='font-bold tracking-tighter mt-6'>Event Date</p>

{post.fields.eventDate}




<p className='font-bold tracking-tighter mt-6'>Location</p>

{post.fields.eventLocation.lat}
{post.fields.eventLocation.lon}












<div>
<Link
to={`/eventDetails/${post.sys.id}`}>
  <button className='bg-black px-20 mt-6 py-4 rounded-md text-white tracking-tighter'>See More</button>
</Link>
</div>






  </div>
  
  
  
  )}



    </div>
  )
}
