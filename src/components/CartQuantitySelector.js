import React, {useState} from 'react'









const CartQuantitySelector = ({ quantity, onQuantityChange }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity || 1);

  const handleQuantityUpdate = (newQuantity) => {
    setCurrentQuantity(newQuantity);
    onQuantityChange(newQuantity); // Pass the updated quantity to parent component
  };

  const incrementQuantity = () => {
    handleQuantityUpdate(currentQuantity + 1);
  };


  
  const decrementQuantity = () => {
    if (currentQuantity > 1) {
      handleQuantityUpdate(currentQuantity - 1);
    }
  };

  return (
    <div  className="quantity-selector">
      <button className="px-3  text-base rounded-sm border-black border-2" onClick={decrementQuantity}>-</button>

      <input className='w-10 text-base rounded-sm border-black border-2 text-center'  value={currentQuantity} onChange={(e) => handleQuantityUpdate(e.target.value)} />

      <button className="px-3 text-bold text-base rounded-sm border-black border-2" onClick={incrementQuantity}>+</button>
    </div>
  );
};

export default CartQuantitySelector;