import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Navigation from '../components/Navigation';
import VariantSelect from '../components/VariantSelect';
import StockStatus from '../components/StockStatus';
import QuantitySelector from '../components/QuantitySelector';




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





  

  const handleVariantSelection = (variant) => {
    setSelectedVariant(variant.id);
  };

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





  return (
    <div>
      <Navigation />

      <button onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mt-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>








      <h1 className="text-3xl tracking-tighter">Product Name: {product.title}</h1>
      <img src={product.images[0].src} alt="" />

      <p className="tracking-tighter text-3xl">Product Details: {product.description}</p>




      {selectedVariantObject ? (

        <>
        <h3 className="text-3xl tracking-tighter mt-4">
          Price of selected variant: ₦{selectedVariantObject.price.amount}
        </h3>

      <StockStatus inStock={selectedVariantObject.available} /> 

      </>

      ) : (
        <p className="text-3xl tracking-tighter mt-4">{product.variants[0].price.amount}</p>
      )}
















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













{/* For mapping of Product details */}

{/* 
      <ul className="mb-40">
        {product.variants.map((variant) => (
          <li key={variant.id}>
            {variant.title} - ₦{variant.price.amount} - {variant.available ? 'In Stock' : 'Out of Stock'}
          </li>
        ))}
      </ul> */}





      <button  className={`px-14 py-2 bg-black text-white rounded-lg m-4 tracking-tighter mt-10 `}  onClick={handleAddToCart}>
Add to Cart
</button>














    </div>
  )
}