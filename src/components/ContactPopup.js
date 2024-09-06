import React from 'react';

const ContactPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-lime-300 p-48 rounded shadow-lg">


        <div className='flex gap-20 justify-between'>

        <h2 className="text-4xl font-italic mb-2 ">hey@famousandunknown</h2>

        <h2 className="text-lg font-bold mb-2">This is a Popup</h2>

        </div>




        <h2 className="text-lg font-bold mb-2">This is a Popup</h2>
        <p className="mb-4">Here is some content inside the popup.</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;