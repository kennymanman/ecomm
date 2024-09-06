import React, {useEffect, useContext, useState} from 'react'
import headingimage from "../Img/headingimage.png"
import Navigation from '../components/Navigation'
import { Link } from "react-router-dom"
import ReactCurvedText from 'react-curved-text';
import {createClient} from 'contentful'
import { ShopContext } from '../context/shopContext'
import clouds from "../Img/clouds.png"
import disco from "../Img/disco.png"
import spotify from "../Img/spotify.png"
import Footer from "../components/Footer"
import ContactPopup from '../components/ContactPopup';
import Cleanearth from "../Img/Cleanearth.png"
import axios from 'axios';







function Home() {

//Klaviyo Signup form
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


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




//For Klaviyo.
  // useEffect(() => {
  //   // Load Klaviyo script
  //   const script = document.createElement('script');
  //   script.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RuSVyp";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Clean up script when component unmounts
  //     document.body.removeChild(script);
  //   };
  // }, []);




  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (window._klOnsite) {
  //     window._klOnsite.push(['identify', { $email: email }]);
  //     window._klOnsite.push(['trackSubmit', 'TW8mF2', { $email: email }]);
  //   }
  //   setEmail(''); // Clear the input after submission
  // };












  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post(
        'https://manage.kmail-lists.com/subscriptions/subscribe?a=VfdLWZ&g=UhFGWN',
        {
          profiles: [{ email: email }],
        },
      
        {
            method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Api-Key': 'pk_be0834d784fa91e7a523cd056dff3ee90f', // Replace with your actual Klaviyo private API key
          },
        }
      );

      if (response.status === 200) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };








  








// Contact Box PopUp
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };








  return (

    <>
    
    

    <div className='h-screen w-full relative '>
   


        <img className='h-full w-full object-cover absolute' src={headingimage} alt=""  />

        <Navigation/>

<div className='flex justify-center gap-2 '>
        <h1 className=' tracking-tighter mt-5 text-7xl relative text-center font-regular'>Life</h1>
        <h1 className=' tracking-tighter mt-5 text-7xl relative text-center font-italic'>Of</h1>
        <h1 className=' tracking-tighter mt-5 text-7xl relative text-center font-regular'>The</h1>
        <h1 className=' tracking-tighter mt-5 text-7xl relative text-center font-italic'>Party</h1>

</div>



{/* <div className='relative '>
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

        </div> */}





    <div className='relative flex justify-between mx-72 mt-96 '>

  <div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Party</h2>
    <Link to="/Photobooths" >
   <h2 className='text-6xl tracking-tight text-black font-regular hover:text-gray-500'>PhotoBooths</h2>
   </Link>
  </div>


  <div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Event</h2>
    <Link to="/Filters" >
   <h2 className='text-6xl tracking-tighter text-black font-regular'>Filters</h2>
   </Link>
  </div>




  <div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Pictures</h2>
    <Link to="/Lagalleria" >
   <h2 className='text-6xl tracking-tighter text-black font-regular'>La Galleria</h2>
   </Link>
  </div>

</div>




<div className='relative flex justify-between text-center mx-72'>
  
<div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Shop</h2>
    <Link to="/Shop" >
   <h2 className='text-6xl tracking-tighter text-black font-regular'>Store</h2>
   </Link>
  </div>



  <div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Our bio</h2>
    <Link to="/EventList" >
   <h2 className='text-6xl tracking-tighter text-black font-regular'>Events</h2>
   </Link>
  </div>




  {/* <div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Need help?</h2>
    <button onClick={togglePopup}>
   <h2 className='text-6xl tracking-tighter text-black font-regular'>Contact</h2>
   </button>

   {isPopupVisible && <ContactPopup onClose={togglePopup} />}
  </div> */}



  <div className='flex'>
    <h2 className='text-black tracking-tighter font-italic text-2xl'>Need help?</h2>
    <Link to="/Contact" >
    <button >
   <h2 className='text-6xl tracking-tighter text-black font-regular'>Contact</h2>
   </button>
   </Link>
   
  </div>





</div>

</div>



{/* Second Section showing a brief description */}

<div className='bg-base-color '>

<div className='px-4'>
<h2 className='text-7xl tracking-tighter font-regular pt-8  '>We are famous & Unknown, A Party community and brand curating the best part of life through parties, events and our brand.</h2>
</div>


<div className='h-screen relative mt-7'>
<img className='absolute h-full w-full object-cover  ' src={Cleanearth} alt="" />
<div className='bg-black bg-opacity-10 absolute top-0 left-0 h-full w-full'></div>

<h2 className='relative text-7xl tracking-tighter text-center z-50 font-regular pt-20 text-white'>We are also a clean earth community & advocate</h2>

<p className='text-white relative text-center px-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

</div>





{/* Merch Section */}

<div className='bg-base-color px-3 pb-20'>


<div className='flex justify-between pt-20'>
  <h2 className='text-7xl tracking-tighter font-regular '>MERCH</h2>

  <Link to="/Shop">
  <h2 className='text-xl tracking-tighter font-suisse '>See all</h2>
  </Link>

</div>
  <hr className='border-black'/>
  <p className='font-italic text-5xl tracking-tight text-subtext-color pt-3'>Shop from the best</p>





  <div className='grid grid-cols-3 gap-3 mt-5'>
  {products.slice(0,3).map(product => (

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
              <h3 className='tracking-tighter font-suisse text-subtext-color text-lg'>{product.title}</h3>
              <h3 className='tracking-tighter font-suisse text-xl'>₦ {product.variants[0].price.amount}</h3>
             
  </div>
</div>


  ))}

</div>









</div>




{/* Events Section */}

<div className='bg-black px-3 py-12 '>

{/* <div className='h-screen relative '>
<img className='absolute h-full w-full object-cover  ' src={Cleanearth} alt="" />
<div className='bg-black bg-opacity-10 absolute top-0 left-0 h-full w-full'></div>

<h2 className='relative text-7xl tracking-tighter text-center z-50 font-regular pt-20 text-white'>We are also a clean earth community & advocate</h2>

<p className='text-white relative text-center px-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div> */}



{/* Events Display */}

<div className='flex justify-between'>
<h2 className='text-7xl text-white tracking-tighter my-5 font-suisse'>Upcoming Events</h2>

<Link to="/EventList" >
<button className='text-white tracking-tighter text-4xl rounded-lg font-suisse hover:text-lime-300'>See all events</button>
</Link>

</div>

<hr className='border-white'/>

<div className='flex justify-between my-4' >

<h2 className='text-4xl text-white tracking-tighter font-suisse'>Date</h2>
<h2 className='text-4xl text-white tracking-tighter font-suisse'>Title</h2>
<h2 className='text-4xl text-white tracking-tighter font-suisse'>Location</h2>
<h2 className='text-4xl text-white tracking-tighter font-suisse'>Ticket Starts at</h2>

</div>

<hr className='border-white'/>


{eventPosts?.items?.slice(0,10).map((post) =>
  
  <Link to={`/eventDetails/${post.sys.id}`}>
  <div className='flex justify-between text-white hover:bg-lime-300 hover:text-black  ' key={post.sys.id}>

   
<h2 className='text-2xl  tracking-tighter font-suisse '>{post.fields.eventDate}</h2>
<h2 className='text-4xl tracking-tighter font-suisse'>{post.fields.eventTitle}</h2>
<h2 className='text-4xl  tracking-tighter font-suisse'>{post.fields.eventPlace}</h2>
<h2 className='text-3xl tracking-tighter font-suisse'>₦{post.fields.ticketPrices}</h2>


    </div>

    <hr className='border-white my-2'/>

    </Link>

    

)}




<h2 className='text-7xl text-white tracking-tighter font-regular text-center mt-20'>Want to host your Event/Party</h2>
<p className='text-white tracking-tighter font-regular text-center text-2xl px-32 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>



{/* Link to Hosting Events Page */}
<div className='text-center mt-4'>
<button className='rounded-md bg-white tracking-tighter text-lg px-28 py-1  hover:bg-lime-300 '>Start Hosting</button>
</div>


</div>








<div className='relative h-screen'>

<img className='h-full w-full object-cover absolute' src={clouds} alt=""  />







<div className="flex items-center justify-center h-full relative">




      <form onSubmit={handleSubmit} className="px-8  pb-8 mb-4 w-full max-w-lg">

      <h2 className='text-5xl relative tracking-tighter text-center font-regular'>Join the Famous & Unknown<br/>Community</h2>
      <p className='text-center tracking-tighter pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label> */}
          <input
            required
            className="shadow appearance-none border border-black  rounded w-full py-2 px-3  leading-tight bg-transparent focus:outline-none focus:shadow-outline"
            id="username"
            value={email}
            type="email"
            placeholder="email address - required"
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
       
        <div className="text-center">
          <button
            className="bg-black hover:bg-white text-white hover:text-black  font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            become a member
          </button>
          
          
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>



</div>






<Footer/>








{/* Newsletter Signup div with Klaviyo */}
<div className=''>

<script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RuSVyp"></script>

<div class="klaviyo-form-TW8mF2"/>


</div>





    
    
    
    </>
   
  )
}

export default Home