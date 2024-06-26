import React, {useState} from 'react'



// export default function QuantitySelector({quantity, selectedQuantity, setSelectedQuantity}) {




//     const [currentQuantity, setCurrentQuantity] = useState(1);


//     const handleDecrement = () => {
//         if (currentQuantity > 1) {
//           setCurrentQuantity(currentQuantity - 1);
//         //   onQuantityChange && onQuantityChange(currentQuantity - 1); // Call parent's handler (optional)
//         }
//       };




//       const handleIncrement = () => {
//         setCurrentQuantity(currentQuantity + 1);
//         // onQuantityChange && onQuantityChange(currentQuantity + 1); // Call parent's handler (optional)
//       };





//   return (

  

//     <div className="flex items-center">

//     <button onClick={handleDecrement} className="px-6  text-bold text-2xl rounded-sm border-black border-2">
//       -
//     </button>

// <p className='px-9    text-xl rounded-sm border-black border-2'>2{quantity}</p>

//     <button onClick={handleIncrement} className="px-6  text-bold text-2xl rounded-sm border-black border-2">
//       +
//     </button>
    
// </div>
//   )
// }





const QuantitySelector = ({ quantity, onQuantityChange }) => {
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
      <button className="px-3  text-bold text-xl rounded-sm border-black border-2" onClick={decrementQuantity}>-</button>

      <input className='w-15 text-xl rounded-sm border-black border-2 text-center'  value={currentQuantity} onChange={(e) => handleQuantityUpdate(e.target.value)} />

      <button className="px-3 text-bold text-xl rounded-sm border-black border-2" onClick={incrementQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;