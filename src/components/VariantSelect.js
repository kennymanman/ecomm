
import React, { useState } from 'react';





function VariantSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const items = ['Option 1', 'Option 2', 'Option 3'];
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleClick = (item) => {
      // Handle item selection here (optional)
      console.log('Selected item:', item);
      setIsOpen(false); // Close dropdown after selection (optional)
    };
  
    return (
      <div className="relative">
        <button
          className="px-3 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          Variant Selector
        </button>
        {isOpen && (
          <ul
            className="absolute z-50 mt-2 w-full rounded-md shadow-sm bg-white dark:bg-gray-800 overflow-hidden"
          >
            {items.map((item) => (
              <li
                key={item}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default VariantSelect;