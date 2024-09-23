import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import clouds from "../Img/clouds.png"
import Footer from '../components/Footer'
import bars from "../Img/bars.png"
import ContentfulSearch from '../components/ContentfulSearch'
import { createClient } from '@supabase/supabase-js';


const supabase = createClient('https://ktlmyeivrfxrochvwqun.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0bG15ZWl2cmZ4cm9jaHZ3cXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDEwNzAsImV4cCI6MjA0MTgxNzA3MH0.aAozRVTn36LbsHhUPRVaJRs1rOc0Ow37we7TMomdfHs');

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  //For Search
  const [searchTerm, setSearchTerm] = useState('');
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('id, title, portrait_image_url')
        .eq('is_premium', true);

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        console.log('Fetched events:', data); // Debugging log
        setEvents(data);
      }
    };

    fetchEvents();
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







  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching events:', error);
    else setEvents(data || []);
  }

  const premiumEvents = events.filter(event => event.plan_id === 3);
  const otherEvents = events.filter(event => event.plan_id !== 3);











  //For Carousel
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
    <>
      <div className='bg-base-color pb-28'>
        <Navigation /> 

        <div className='grid grid-cols-2 mx-3'>
          <div className='col-span-1'>
            <h1 className='text-7xl tracking-tighter font-italic  mt-4'>Events & Parties</h1>
            <h1 className='text-4xl tracking-tighter font-regular  text-subtext-color'>View all events, parties & occassions</h1>
          </div>

          <div className='col-span-1 text-right mt-12'>
            <ContentfulSearch/>
          </div>
        </div>



        <div 
          ref={carouselRef}
          className="inset-0 flex items-center overflow-x-hidden cursor-grab active:cursor-grabbing mt-20"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex">
          {premiumEvents.map(event => (
               // Check if event and event.id are defined
                <div 
                  key={event.id} 
                  className="flex-shrink-0 w-96 h-96 mx-2"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <img
                  
                    src={event.image_portrait_url || clouds}
                    alt={event.event_title}
                    className="w-full h-full object-cover rounded-3xl shadow-lg"
                    draggable="false"
                  />
                  <p className="text-center mt-2">{event.title}</p>
                </div>
               
            ))}
          </div>
        </div>







        <div className='grid grid-cols-5 gap-1 mx-3 mt-10 '>
          {events.map(event => (
            <div key={event.id} className='col-span-1 relative'>
              <img className='w-full h-80 object-cover absolute ' src={event.image_portrait_url || clouds} alt={event.event_title} />
              <div className='relative opacity-0 hover:opacity-100 text-center mt-20'> 
                <p className='tracking-tighter text-base text-center'>20th September 2024</p>
                <p className='tracking-tighter text-3xl text-center'>{event.event_title}</p>
                <p className='tracking-tighter text-xl text-center'>Starting at ₦{event.ticketPrices}</p>
                <Link  className="text-base tracking-tighter   ">
                  <button className='bg-black tracking-tighter py-2 rounded-md px-6 relative text-white mb-2 mt-3 '>Get Ticket</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}
