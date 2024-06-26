import React, {useState, Fragment, useContext, useEffect} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShopContext } from '../context/shopContext'
import CartQuantitySelector from '../components/CartQuantitySelector';
import { useParams, useNavigate, Link } from 'react-router-dom';





export default function Cart() {

    const [open, setOpen] = useState(true)

    const {isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext)

   

    console.log(checkout)


const [quantity, setQuantity] = useState(1)

const [selectedQuantity, setSelectedQuantity] = useState(quantity && 1)

const {fetchAllProducts, products, product, addItemToCheckout, fetchProductWithHandle } = useContext(ShopContext)


const [selectedVariant, setSelectedVariant] = useState(product.variants );




// const navigate = useNavigate();
// let { handle } = useParams()




// useEffect(() => {
//   fetchProductWithHandle(handle)
//   .then(data => console.log(data))
// }, [fetchProductWithHandle, handle])

// useEffect(() => {
 
//  ( async ()=> {
//   await fetchAllProducts()
//   setSelectedVariant(product.variants && product.variants[0].id)
// } )()
// }, [fetchAllProducts, setSelectedVariant, product])


// console.log("products", product)

// if (!product.title) return <div>loading...</div>

// if (!product.variants) return null;

// if (!quantity) return null;











     // Handle quantity change from NumberSelector component
     const handleQuantityChange = (newQuantity) => {
      setQuantity(newQuantity);
    };




    // const handleAddToCart = () => {
    //   if (selectedVariant && quantity > 0) {
    //     addItemToCheckout(selectedVariant, quantity); // Pass quantity to addItemToCheckout
    //   } else {
    //     // Handle error or notification if variant or quantity is invalid
    //     console.error("Please select a variant and quantity before adding to cart");
    //   }
      
    //   console.log("17thJune", selectedVariant, quantity)
    // };
    

  return (
    


    <Transition.Root show={isCartOpen}  as={Fragment}>
    <Dialog as="div" className="relative z-10"  onClose={closeCart}>
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
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping Cart</Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-green-500"
                        //  onClick={() => setOpen(false)}
                        onClick={() => closeCart()}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">

                       <p className='text-lg font-medium text-gray-900 tracking-tighter mb-4'> total items: {checkout?.lineItems?.length}</p> 
                      
                        <ul role="list" className="-my-6 divide-y divide-gray-200">

                       
                    

                          
                             
                          { checkout?.lineItems?.length ?(
                           checkout.lineItems.map(item => (
                             
                            <li key={item.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">

                              <Link to={`/products/${product.handle}`} key={product.id}   className="">
                                <img
                                  src={item.variant.image.src}
                                  alt={item.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                               </Link>


                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    
                                 <div>  
                                    <h3 className='text-lg'>
                                      <a href={item.href}>{item.title}</a>
                                    </h3>
                                    

                                    <div className='flex justify-between gap-3'>
                                    <p className='tracking-tighter text-gray-500'>Price</p>
                                    <h3 className='text-md'>

                                      <a href={item.href}>{item.variant.price.amount}</a>
                                    </h3>
                                    </div>






                                    <div className='flex justify-between'>
                                    <p className='tracking-tighter text-gray-500'>Color</p>
                                    <h3 className='text-md'>

                                      <a href={item.href}>{item.variant.title}</a>
                                    </h3>
                                    </div>


                                    <p className="text-gray-500">Qty {item.quantity}x</p>

                                    

                                    </div>

                                  </div>
                                 
                                </div>


                                <div className="flex flex-1  justify-between text-sm">
                                 

                                {/* <CartQuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} /> */}





                                  <div className="flex">



                                  {/* <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} /> */}




                                    <button
                                     
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"

                                      onClick={() => removeLineItem(item.id)}
                                    >
                                      Remove
                                    </button>
                                  </div>

                                  
                                </div>
                                
                              </div>


                             
                              
                            </li>
                          ))):<h1 className='tracking-tighter text-2xl'>Cart is Empty</h1>
                               
                    }

                        </ul>

                           
                      

                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
               

              
                    <div className="flex justify-between text-base font-medium text-gray-900">

                      <p>Subtotal</p>
                     

                      { checkout?.lineItems?.length?
                      <p className='text-2xl'>₦{checkout.lineItemsSubtotalPrice.amount}</p>:<p>₦0.00</p>
                      
                       } 

                    

                    </div>

               

                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">

                    { checkout?.lineItems?.length ?
                      <a
                        href={checkout?.webUrl}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 "
                      >
                        Checkout
                      </a>:<a disable className="flex items-center justify-center rounded-md border border-transparent bg-gray-500 px-6 py-3 text-base font-medium text-white shadow-sm  ">Checkout</a>
                     }


                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
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