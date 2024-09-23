import React, { useEffect } from 'react';

const KlaviyoForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VfdLWZ";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="klaviyo-form-TW8mF2"></div>
  );
};

export default KlaviyoForm;
