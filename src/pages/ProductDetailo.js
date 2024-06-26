import React, {useContext, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shopContext'
import Navigation from '../components/Navigation';
import VariantSelect from '../components/VariantSelect';//variant
import StockStatus from '../components/StockStatus';
import QuantitySelector from '../components/QuantitySelector';










export default function ProductDetail() {


  
const {fetchAllProducts, products, product, addItemToCheckout, fetchProductWithHandle } = useContext(ShopContext)


const [selectedVariant, setSelectedVariant] = useState(product.variants );







const [quantity, setQuantity] = useState(1)

const [selectedQuantity, setSelectedQuantity] = useState(quantity && 1)






const navigate = useNavigate();
let { handle } = useParams()





  useEffect(() => {
    fetchProductWithHandle(handle)
    .then(data => console.log(data))
  }, [fetchProductWithHandle, handle])

  useEffect(() => {
   
   ( async ()=> {
    await fetchAllProducts()
    setSelectedVariant(product.variants && product.variants[0].id)
  } )()
  }, [fetchAllProducts, setSelectedVariant, product])


  console.log("products", product)

  if (!product.title) return <div>loading...</div>

  if (!product.variants) return null;

  if (!quantity) return null;









  // useEffect(() => {
  //   fetchProductWithHandle(handle)
  //   .then(data => console.log(data))
  // }, [fetchProductWithHandle, handle])

  // useEffect(() => {
  //   fetchAllProducts()
  //   return () => {

  //   }
  // }, [fetchAllProducts])


  // console.log("products", product)

  // if (!product.title) return <div>loading...</div>

  // if (!product.variants) return null;

  // if (!quantity) return null;






     // Handle quantity change from NumberSelector component
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };




  const handleAddToCart = () => {
    if (selectedVariant && quantity > 0) {
      addItemToCheckout(selectedVariant, quantity); // Pass quantity to addItemToCheckout
    } else {
      // Handle error or notification if variant or quantity is invalid
      console.error("Please select a variant and quantity before adding to cart");
    }
    
    console.log("17thJune", selectedVariant, quantity)
  };
  





console.log("selectedvariant", selectedVariant)


 console.log("stock checker", product)

// console.log("videoissue", product.variants)
 
return (
    <div>
<Navigation/>



 <button onClick={() => navigate(-1)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>



<h1 className='text-3xl tracking-tighter'>Product Name:{product.title} </h1>
<img src={product.images[0].src} alt="" /> 

<p className=' tracking-tighter text-3xl'>product details: {product.description} </p>


<h3 className='text-3xl tracking-tighter mt-4'>Price of product: ₦{product.variants[0].price.amount}</h3>




{/* Get actual variant price */}

{product.variants.map((variant) => (

<h3 className='text-3xl tracking-tighter mt-4'>Price of product: ₦{variant.price.amount} </h3>

))}











<ul className='mb-40'>
        {product.variants.map((variant) => (
          <li key={variant.id}>
            {variant.title} - {variant.price.amount} 
          </li>




        ))}
  </ul>




      
      {product.variants && (
        <VariantSelect
        
          product={product}
          selectedVariant={selectedVariant}
          setSelectedVariant = {setSelectedVariant}
          setIsActive = {selectedVariant}
          onVariantSelection={setSelectedVariant} // Pass variant selection handler
        />
      )}



<div className='m-4'>
{product.variants.map((variant) => (
<StockStatus inStock={variant.available} />

))}
</div>









<QuantitySelector  quantity={quantity} onQuantityChange={handleQuantityChange} />







<button  className={`px-14 py-2 bg-black text-white rounded-lg m-4 tracking-tighter mt-10 `}  onClick={handleAddToCart}>
Add to Cart
</button>














    </div>
  )
}
