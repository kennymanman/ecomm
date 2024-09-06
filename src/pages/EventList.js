import React, {useEffect, useState, useRef} from 'react'
import {createClient} from 'contentful'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
import clouds from "../Img/clouds.png"
// import * as contentful from 'contentful';
import Footer from '../components/Footer'
import bars from "../Img/bars.png"



export default function EventList() {




  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  //For Search
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);





  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image4.jpg',
  ];







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





useEffect(() => {
  const fetchEntries = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'eventslagos',
      });
      setEntries(response.items);
      setFilteredEntries(response.items);
    } catch (error) {
      console.error('Error fetching Contentful entries:', error);
    }
  };

  fetchEntries();
}, []);



//For Search
useEffect(() => {
  const results = entries.filter(entry =>
    entry.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredEntries(results);
}, [searchTerm, entries]);

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};















// useEffect(() => {
//   const carousel = carouselRef.current;
//   let animationFrameId;

//   const animate = () => {
//     if (!isPaused) {
//       carousel.scrollLeft += 1; // Adjust speed here
//       if (carousel.scrollLeft >= (carousel.scrollWidth / 2)) {
//         carousel.scrollLeft = 0;
//       }
//     }
//     animationFrameId = requestAnimationFrame(animate);
//   };

//   animationFrameId = requestAnimationFrame(animate);

//   return () => cancelAnimationFrame(animationFrameId);
// }, [isPaused]);









useEffect(() => {
  const carousel = carouselRef.current;
  let animationFrameId;

  const animate = () => {
    if (!isPaused && !isDragging) {
      carousel.scrollLeft += 1; // Adjust speed here
      if (carousel.scrollLeft >= (carousel.scrollWidth / 2)) {
        carousel.scrollLeft = 0;
      }
    }
    animationFrameId = requestAnimationFrame(animate);
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrameId);
}, [isPaused, isDragging]);

const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.pageX - carouselRef.current.offsetLeft);
  setScrollLeft(carouselRef.current.scrollLeft);
};

const handleMouseUp = () => {
  setIsDragging(false);
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carouselRef.current.offsetLeft;
  const walk = (x - startX) * 2; // Adjust for faster/slower drag
  carouselRef.current.scrollLeft = scrollLeft - walk;
};







  return (
    <div className='bg-base-color'>
      
     <Navigation /> 



<div className='grid grid-cols-2 mx-3'>

  <div className='col-span-1'>
<h1 className='text-7xl tracking-tighter font-italic  mt-4'>Events & Parties</h1>

<h1 className='text-4xl tracking-tighter font-regular  text-subtext-color'>View all events, parties & occassions</h1>
 </div>


 <div className='col-span-1 text-right mt-12'>

  <input className='w-2/4 bg-transparent border-black border-b ' placeholder='search events or parties' value={searchTerm} onChange={handleSearch} />

 </div>

</div>









  

{eventPosts?.items?.map((post) =>
   

<ul>
        {filteredEntries.map(entry => (
          <li className='text-8xl' key={post.sys.id}>{post.fields.eventTitle}</li>
        ))}
      </ul>

)}





    {/* <div 
      ref={carouselRef}
      className="fixed inset-0 flex items-center overflow-x-hidden "
    >
      <div className="flex animate-scroll">
        {[...images, ...images].map((img, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-96 h-96 mx-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={clouds}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div> */}




<div 
      ref={carouselRef}
      className=" inset-0 flex items-center overflow-x-hidden cursor-grab active:cursor-grabbing mt-20"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex">
        {[...images, ...images].map((img, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-96 h-96 mx-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={clouds}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl shadow-lg"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>




  

  

      <div className='grid grid-cols-6 gap-3 mx-3 mt-10'>
      

      {eventPosts?.items?.map((post) =>
      
      <div key={post.sys.id} className='col-span-1'>

      <img className='h-80 w-64' src={clouds} alt="" />

      <div className='bg-lime-300'> 
      
      <p className='tracking-tighter text-lg text-center'>20th September 2024</p>

      <p className='tracking-tighter text-2xl'>Party at Good Beach</p>

      <img className='w-40 h-32' src={bars} alt="" />
      </div>

      </div>
      
    )
  }
      
      
      
      </div>

  


    








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




<Footer/>
    </div>
  )
}
