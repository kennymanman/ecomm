import React, { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'






export default function SideMenu() {

    const [open, setOpen] = useState(true)

    
    const {isMenuOpen, closeMenu, checkout, openCart} = useContext(ShopContext)




    return (
      <Transition.Root show={isMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => closeMenu()}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-2xl text-right  tracking-tighter leading-6 text-gray-900">
                          Menu
                        </Dialog.Title>


                        {/* <button className='flex'  onClick={() => openCart()}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
 
</svg>

<span className="inline-flex items-center rounded-full bg-green-400 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-500/10">
        {checkout.lineItems?.length}
      </span>
</button> */}









                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">

                      {/* Your content */} 


                      <Link to="/Photobooths" >
                       <p className='tracking-tighter text-3xl my-4 '>Photo-Booths</p> 
                        </Link>



                        <Link to="/Filters" >
                       <p className='tracking-tighter text-3xl my-4 '>Event Filters</p> 
                        </Link>



                        <Link to="/Lagalleria" >
                       <p className='tracking-tighter text-3xl my-4 '>La Galleria</p> 
                        </Link>


                        <Link to="/Shop" >
                       <p className='tracking-tighter text-3xl my-4 '>Shop</p> 
                        </Link>



                        <Link to="/Contact" >
                       <p className='tracking-tighter text-3xl my-4 '>About</p> 
                        </Link>


                        <Link to="/Contact" >
                       <p className='tracking-tighter text-3xl my-4 '>Contact</p> 
                        </Link>


                        
                        
                        
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }
