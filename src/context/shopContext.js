import React, { Component, useEffect, useState } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext();


const client = Client.buildClient({
    storefrontAccessToken: '46917c779ee4279f80f25181c4f3c5e8',
    domain: 'famousandunknown.myshopify.com'
    });


   
 

class ShopProvider extends Component {

state= {
    product:{},
    collections:{},
    products:[],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false
}





componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      this.createCheckout()
    }
  }


 


createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id)
    this.setState({ checkout: checkout });
  };





  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((error) => console.log(error));
  };








addItemToCheckout = async (variantId, quantity) => {
  const lineItemsToAdd = [
    {
      variantId,
      quantity: parseInt(quantity, 10),
    },
  ];
  const checkout = await client.checkout.addLineItems(
    this.state.checkout.id,
    lineItemsToAdd
  );
  this.setState({ checkout: checkout });

  this.openCart();
};








removeLineItem = async (lineItemIdsToRemove) => {

  const checkoutId = this.state.checkout.id

  client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove)
    .then(checkout => this.setState({ checkout }))
    
}








fetchAllProducts = async () => {
 
        const products = await client.product.fetchAll()
        this.setState({ products: products })
    
}



// getCollectionProducts = async (collectionId) => {

    
//   const collection = await client.collection.fetchWithProducts(collectionId);
//    return collection.products;
//   //  this.setState({ collection: collection})
// };



getCollectionProducts = async () => {

    
const collections = await client.collection.fetchAllWithProducts().then((collections) => {

console.log(collections)
console.log(collections[0].products);

this.setState({ collections: collections})
  });
   
 

};




fetchProductWithHandle = async (handle) => {

    const product = await client.product.fetchByHandle(handle)

    this.setState({ product: product })
    
}



// fetchCollectionWithId = async (collectionId) => {

//    const collectionID = await client.collection.fetchWithProducts(collectionId, {productsFirst: 10})

//    this.setState({collectionID: collectionID})

//    console.log(collectionID);
//    console.log(collectionID.products);
// }





closeCart = () => {this.setState({ isCartOpen: false})}


openCart = () => {this.setState({ isCartOpen: true})}


closeMenu = () => {this.setState({ isMenuOpen: false })}


openMenu = () => {this.setState({ isMenuOpen: true })}


render() {


    // console.log(this.state.checkout)


  return (
    <ShopContext.Provider
    
    value={{
        ...this.state,
        fetchAllProducts: this.fetchAllProducts,
        fetchProductWithHandle: this.fetchProductWithHandle,
        closeCart: this.closeCart,
        openCart: this.openCart,
        closeMenu: this.closeMenu,
        openMenu: this.openMenu,
        addItemToCheckout: this.addItemToCheckout,
        removeLineItem: this.removeLineItem,
        getCollectionProducts: this.getCollectionProducts
        
      }}
    
    
    
    >

        {this.props.children}
    </ShopContext.Provider>
  )
}

}



const ShopConsumer = ShopContext.Consumer

export {ShopConsumer, ShopContext}



export default ShopProvider



