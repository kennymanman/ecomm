import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import testlogo from "../Img/testlogo.png"
import famouslogo from "../Img/famouslogo.png"


export default function Navigation() {


  const {openCart, openMenu, checkout} = useContext(ShopContext)
  return (


    <div className="px-2 py-2 relative flex justify-between ">


<div>
<Link to="/">
{/* <img className='w-12 h-12 rounded-full' src={famouslogo} alt="" /> */}

<div className='bg-red-700 w-11 h-11 rounded-full'/>

</Link>
</div>









<button className=''  onClick={() => openMenu()}>
<h1 className='tracking-tighter text-2xl font-regular'>Menu</h1>
</button>





{/* <div>
<button className=''  onClick={() => openMenu()}>
<h1 className='tracking-tighter text-3xl text-black font-italic'>Join the Community</h1>  
</button>
</div> */}








<div className='flex gap-4'>

{/* <button className=''  onClick={() => openMenu()}>
<h1 className='tracking-tighter text-xl font-suisse'>Menu</h1>
</button> */}



<button className='flex'  onClick={() => openCart()}>
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
 
</svg> */}

<h1 className='tracking-tighter text-2xl font-italic mr-1'>Cart</h1>

<span className="inline-flex items-center rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">

  
{ checkout?.lineItems?.length?
        <p className='text-white'>{checkout?.lineItems?.length}</p>:<p className='text-white'>0</p>

}
      </span>
</button>
</div>







    </div>
  )
}
