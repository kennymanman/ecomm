import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
    storefrontAccessToken: '46917c779ee4279f80f25181c4f3c5e8',
    domain: 'famousandunknown.myshopify.com'
});


class ShopProvider extends Component {
    state = {
        product: {},
        collections: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false,
        error: null,
        checkoutComplete: false,//Added this on 12th August
    };

    componentDidMount() {
        if (localStorage.checkout_id) {
            this.fetchCheckout(localStorage.checkout_id);
        } else {
            this.createCheckout();
        }
    }

//Just added this
    clearCheckoutAndCart = () => {
        this.setState({ checkout: {}, isCartOpen: false });
        localStorage.removeItem("checkout_id");
      };





    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout_id", checkout.id);
        this.setState({ checkout: checkout });
    };



    // fetchCheckout = async (checkoutId) => {
    //     client.checkout.fetch(checkoutId)
    //         .then((checkout) => {
    //             this.setState({ checkout: checkout });
    //         })
    //         .catch((error) => console.log(error));
    // };


    fetchCheckout = async (checkoutId) => {
        try {
          const checkout = await client.checkout.fetch(checkoutId);
      
          if (checkout.completedAt) {
            this.clearCheckoutAndCart();
          } else {
            this.setState({ checkout: checkout });
          }
        } catch (error) {
          console.log(error);
        }
      };


//This is the original on 12th August
    // addItemToCheckout = async (variantId, quantity) => {
    //     const lineItemsToAdd = [
    //       {
    //         variantId,
    //         quantity: parseInt(quantity, 10),
    //       },
    //     ];
      
    //     const checkout = await client.checkout.addLineItems(
    //       this.state.checkout.id,
    //       lineItemsToAdd
    //     );
      
    //     if (checkout.completedAt) {
    //       this.clearCheckoutAndCart();
    //     } else {
    //       this.setState({ checkout: checkout });
    //       this.openCart();


    //     }
    //   }


      addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
          {
            variantId,
            quantity: parseInt(quantity, 10),
          },
        ];
      
        try {
          const checkout = await client.checkout.addLineItems(
            this.state.checkout.id,
            lineItemsToAdd
          );
      
          if (checkout.completedAt) {
            this.setState({ 
              checkoutComplete: true,
              checkout: {} 
            });
            localStorage.removeItem("checkout_id");
          } else {
            this.setState({ checkout: checkout });
            this.openCart();
          }
        } catch (error) {
          console.error("Error adding item to checkout:", error);
        }
      }



//Added on 12th August
      resetCheckoutComplete = () => {
        this.setState({ checkoutComplete: false });
      }


          // //added here
          // const completedCheckout = await client.checkout.complete(checkoutId, paymentData);
          //   //added here
          // if (completedCheckout.completedAt) {
          //   // Redirect to your custom URL
          //   window.location.href = 'https://your-custom-url.com/thank-you';
          // }


      





    // removeLineItem = async (lineItemIdsToRemove) => {
    //     const { checkout } = this.state;
    //     if (checkout.completedAt) {
    //         this.setState({ error: "Checkout is already completed." });
    //         return;
    //     }
    //     const newCheckout = await client.checkout.removeLineItems(checkout.id, lineItemIdsToRemove);
    //     this.setState({ checkout: newCheckout });
    // };



    removeLineItem = async (lineItemIdsToRemove) => {
        const checkoutId = this.state.checkout.id;
      
        const checkout = await client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove);
      
        if (checkout.completedAt) {
          this.clearCheckoutAndCart();
        } else {
          this.setState({ checkout });
        }
      };







    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({ products: products });
    };

    getCollectionProducts = async () => {
        const collections = await client.collection.fetchAllWithProducts();
        this.setState({ collections: collections });
    };

    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({ product: product });
    };

    closeCart = () => { this.setState({ isCartOpen: false }); };
    openCart = () => { this.setState({ isCartOpen: true }); };
    closeMenu = () => { this.setState({ isMenuOpen: false }); };
    openMenu = () => { this.setState({ isMenuOpen: true }); };

    render() {
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
                    resetCheckoutComplete: this.resetCheckoutComplete,//added this
                    removeLineItem: this.removeLineItem,
                    getCollectionProducts: this.getCollectionProducts,
                    // clearCheckoutAndCart: this.clearCheckoutAndCart,
                }}
            >
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

const ShopConsumer = ShopContext.Consumer;
export {ShopConsumer, ShopContext };
export default ShopProvider;