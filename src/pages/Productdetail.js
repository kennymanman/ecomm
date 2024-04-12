import React, {useContext} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext'




export default function Productdetail() {

    const {fetchAllProducts, product, addItemToCheckout, fetchProductWithHandle } = useContext(ShopContext)
    const location = useLocation();
    const name = location.state?.title

  return (
    <div>

     
        
        Productdetail</div>
  )
}
