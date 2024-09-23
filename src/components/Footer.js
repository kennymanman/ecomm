import React, {useEffect, useContext, useState} from 'react'
import testlogo from "../Img/testlogo.png"
import axios from 'axios';



export default function Footer() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

//Klaviyo
const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');

  const formData = new FormData();
  formData.append('email', email);

  try {
    const response = await axios.post(
      'https://manage.kmail-lists.com/subscriptions/subscribe?a=VfdLWZ&g=UhFGWN',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    }
    // } else {
    //   setMessage('An error occurred. Please try again.');
    // }
  } catch (error) {
    console.error('Error:', error);
    setMessage('');
  }
};



  return (
    <div className='py-10 grid grid-cols-5 px-4 bg-base-color gap-3 ' >


      <div className='col-span-1'>
        <h4 className='my-8 tracking-tighter'>LINKS</h4>
        <p className='tracking-tighter'>Shop</p>
        <p className='tracking-tighter'>Events</p>
        <p className='tracking-tighter'>AR Filters</p>
        <p className='tracking-tighter'>Photobooths</p>

      </div>

      <div className='col-span-1'>
      <h4 className='my-8 tracking-tighter'>FOLLOW</h4>
      <p className='tracking-tighter'>Instagram</p>
      <p className='tracking-tighter'>Twitter</p>
      </div>

      <div className='col-span-1'>
      <h4 className='my-8 tracking-tighter'>CONTACT</h4>
      <p className='tracking-tighter'>92, Lanre Awolokun Gbagada Phase 2, Lagos, Nigera</p>
      <p className='tracking-tighter mt-6'>hey@famousandunknown.com</p>
      </div>


      <div className='col-span-2'>
      <h4 className='my-8 tracking-tighter text-right'>NEWSLETTER</h4>

<div className='text-right'>


<form onSubmit={handleSubmit}>
      <input
            className=" appearance-none border border-b-black  rounded w-96 py-2 px-3  leading-tight bg-transparent focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            value={email}
            placeholder="email address - required"
            onChange={(e) => setEmail(e.target.value)}
          />


        <button
            className="bg-black hover:bg-white text-white hover:text-black  font-bold w-50 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Subscribe
          </button>


  </form>


</div>

<div className='flex justify-between gap-4 text-right mt-10'>
<p className='tracking-tighter'>LAGOS</p>

<p>5:20PM</p>

</div>
      
      </div>



    </div>
  )
}
