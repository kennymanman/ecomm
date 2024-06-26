import React, {useState} from 'react';
import { DropdownMenu, DropdownButton, DropdownItem } from 'react-bootstrap'; // Tailwind CSS Dropdown components







function VariantSelect({ product, selectedVariant, onVariantSelection, setSelectedVariant}) {

    // const [selected, setSelected] = useState()


    // const [isActive, setIsActive] = useState(false);


    // const handleClick = () => {
    //   setIsActive(!isActive); // Toggle active state on click
    // };





    const [isActive, setIsActive] = useState(selectedVariant?.id || null); // Set initial active based on selectedVariant

    const handleClick = (variantId) => {
      onVariantSelection(product.variants.find((variant) => variant.id === variantId));
      setSelectedVariant(variantId);
      setIsActive(variantId); // Update active state on selection
    };










  const variantOptions = product.variants.map((variant) => (








<div className='' key={variant.id}>
<button
  className={`
    border-black border-2 rounded-full  px-6 py-1  hover:bg-lime-200 
    ${variant.id === isActive ? 'bg-black text-white' : 'bg-white'}
  `}
  key={variant.id}
  onClick={() => handleClick(variant.id)}
>
  <h2 className=' text-bold text-xl tracking-tighter '>
    {variant.title}
  </h2>
</button>
</div>


  ));










  const selectedVariantTitle = selectedVariant ? selectedVariant.title : 'Select Variant';

  return (
    //  <DropdownButton id="dropdown-basic-button" title={selectedVariantTitle}>
    //    {variantOptions}
    // </DropdownButton>

<div className=''>
<p className='' title={selectedVariantTitle}>

{variantOptions}
</p>



{/* <div className='flex flex-row '>
<button className={` ${isActive ? 'active:bg-blue-500' : ''}`}  key={variant.id} onClick={() => {
      onVariantSelection(variant)
      setSelectedVariant(variant.id)
      handleClick()
   
      }}>

<h2 className='border-2 border-black rounded-full text-bold text-xl tracking-tighter px-2 '>{variant.title}</h2>
</button>
</div> */}


</div>





  );
}

export default VariantSelect;