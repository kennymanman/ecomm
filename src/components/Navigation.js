import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'


export default function Navigation() {


  const {openCart, openMenu, checkout} = useContext(ShopContext)
  return (
    <div className="mx-1 flex justify-between">

<Link to="/">
<h1 className='tracking-tighter text-3xl'>Famous</h1>
</Link>

{/* <div className='flex justify-between gap-9'>

<h1 className='tracking-tighter text-2xl '>Photo-Booths</h1>

<h1 className='tracking-tighter text-2xl'>Le Galleria</h1>

<Link to="/ProductDetails">
<h1 className='tracking-tighter text-2xl'>Filters</h1>
</Link>


<button  onClick={() => openMenu()}>
<h1 className='tracking-tighter text-2xl'>Menu</h1>  
</button>


<Link to="/Shop">
<h1 className='tracking-tighter text-2xl'>Shop</h1>
</Link>


<button className='flex'  onClick={() => openCart()}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
 
</svg>

<span className="inline-flex items-center rounded-full bg-green-400 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">
        {checkout.lineItems?.length}
      </span>
</button>


</div> */}







<button  onClick={() => openMenu()}>
<h1 className='tracking-tighter text-xl'>Menu</h1>  
</button>





<button className='flex'  onClick={() => openCart()}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
 
</svg>

<span className="inline-flex items-center rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">

  
{ checkout?.lineItems?.length?
        <p>{checkout?.lineItems?.length}</p>:<p>0</p>

}
      </span>
</button>





    </div>
  )
}
