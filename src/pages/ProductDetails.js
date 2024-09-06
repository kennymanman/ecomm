import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Navigation from '../components/Navigation';
import VariantSelect from '../components/VariantSelect';
import StockStatus from '../components/StockStatus';
import QuantitySelector from '../components/QuantitySelector';
import clouds from "../Img/clouds.png"
import Footer from '../components/Footer';






export default function ProductDetails() {
  const {
    fetchAllProducts,
    products,
    product,
    addItemToCheckout,
    fetchProductWithHandle,
  } = useContext(ShopContext);


  const [selectedVariant, setSelectedVariant] = useState(null); // Initially no variant selected
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const { handle } = useParams();




  useEffect(() => {
    fetchProductWithHandle(handle)
      .then((data) => console.log(data));
  }, [fetchProductWithHandle, handle]);

  // Fetch all products on first render (optional if needed)
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  useEffect(() => {
    if (product && !selectedVariant) {
      setSelectedVariant(product.variants && product.variants[0].id); // Default to first variant
    }
  }, [product, selectedVariant]);

  console.log("products", product);

  if (!product.title) return <div>Loading...</div>;
  if (!product.variants) return null;





  

  // const handleVariantSelection = (variant) => {
  //   setSelectedVariant(variant.id);
  // };


  

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (selectedVariant && quantity > 0) {
      addItemToCheckout(selectedVariant, quantity);
    } else {
      console.error(
        "Please select a variant and quantity before adding to cart"
      );
    }
  };

  const selectedVariantObject = product.variants?.find(
    (variant) => variant.id === selectedVariant
  );





  
  // Add this line to determine if the selected variant is in stock
  const isInStock = selectedVariantObject?.available ?? false;


  return (
    <div className='bg-base-color'>

      <Navigation />



<div className='flex gap-2 pl-3'>
      <button onClick={() => navigate(-1)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

      </button>

      <p className='tracking-tighter text-lg'>back</p>

</div>










<div className='flex  gap-4 md:flex-row h-screen'>


<div className='w-1/2 overflow-hidden relative '>

  <img className='absolute h-full w-full object-cover' src={product.images[0].src} alt="" />

</div>



<div className='w-1/2 overflow-y-auto'>


<h1 className='font-suisse text-5xl tracking-tighter '>{product.title}</h1>



{/* To display product price */}
{selectedVariantObject ? (

<>
<h3 className="text-3xl tracking-tighter mt-4">
Price: ₦{selectedVariantObject.price.amount}
</h3>

<StockStatus inStock={selectedVariantObject.available} /> 

</>

) : (
<p className="text-3xl tracking-tighter mt-4">Price: ₦{product.variants[0].price.amount}</p>
)}




{/* 
<h1 className='text-2xl tracking-tighter my-6'>price: ₦20,000</h1> */}

<hr className='border-black'/>

<div className='grid grid-cols-2 gap-2 my-5'>

{product.variants && (
        <VariantSelect
        product={product}
        selectedVariant={selectedVariant}
        setSelectedVariant = {setSelectedVariant}
        setIsActive = {selectedVariant}
        onVariantSelection={setSelectedVariant}  // Pass selection handler
        />
      )}


<QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />

</div>


<p className='tracking-tighter mt-4' >ITEM DESCRIPTION</p>

<p className='tracking-tighter' >{product.description} Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


<hr className='border-black my-5'/>


<div className='grid grid-cols-2 gap-4'>

<div>
<p className='tracking-tighter mt-4' >READ ME</p>  

<p className='tracking-tighter' > Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

</div>





<div>

<p className='tracking-tighter mt-4' >WEIGHT</p>  
<p className='tracking-tighter' >5kg</p>

<hr className='border-black my-2'/>

<p className='tracking-tighter mt-4' >MEASUREMENT</p>  
<p className='tracking-tighter' >10x10cm by 40cm</p>

<hr className='border-black my-2'/>

<p className='tracking-tighter mt-4' >MEASUREMENT</p>  
<p className='tracking-tighter' >10x10cm by 40cm</p>

<hr className='border-black my-2'/>

<p className='tracking-tighter mt-4' >MEASUREMENT</p>  
<p className='tracking-tighter' >10x10cm by 40cm</p>


</div>





</div>


<hr className='border-black my-5'/>

<p className='tracking-tighter ' >SHIPPING & RETURNS</p> 
<p className='tracking-tighter' > Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>




<button  onClick={handleAddToCart}  disabled={!isInStock} className='bg-black w-full text-white tracking-tighter rounded-sm my-5 py-3 disabled:bg-slate-600'>
{isInStock ? 'Add To Cart' : 'Out of Stock'}
  </button>









</div>







</div>



<Footer/>



























    </div>
  )
}