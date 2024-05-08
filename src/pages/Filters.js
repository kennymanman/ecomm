import React, {useContext, useEffect} from 'react'
import { ShopContext } from '../context/shopContext'
import Navigation from "../components/Navigation"
import { Link } from 'react-router-dom'



export default function Filters() {


 const {fetchAllProducts, products, fetchCollectionWithId, collection} = useContext(ShopContext)


 
 useEffect(() => {

    fetchAllProducts()
  }, [fetchAllProducts])
  
  if (!products) return <div>Loading.....</div>

  if (!collection) return <div>Loading.....</div>
  
//   console.log(products)

  console.log(collection);





  return (
    <>
    
    <Navigation/>
    
    <div>
        <h1 className='tracking-tighter text-5xl mt-10'>Filters</h1>
        
        
        </div>
    
    
    
    
    </>
  
  )
}
