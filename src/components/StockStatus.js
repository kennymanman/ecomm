import React, { Fragment, useState, useContext } from 'react'


function StockStatus({ inStock }) {
    return (
      <span className={inStock ? "in-stock" : "out-of-stock"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    );
  }
  
  export default StockStatus;