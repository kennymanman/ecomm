import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Productdetail from "./pages/Productdetail";
import Error from "./pages/Error";
import SideMenu from "./components/SideMenu";




function App() {
  return (
    <div>

<Router>

  <SideMenu/>

  <Cart/> 
        <Routes>

          {/* <Route path="/ProductDetails/:id" element={<ProductDetails/>} /> */}
          
         

        <Route path="/" element={<Home />} />

        <Route path="/Shop" element={<Shop />} />

        <Route path="/Cart" element={<Cart />} />

    

        <Route path="/Productdetail" element={<Productdetail />} />

        {/* <Route path="/products/:productId" element={<ProductDetails/>} /> */}


        <Route path="/products/:handle" element={<ProductDetails/>} />
        
        <Route path="/ProductDetails" element={<ProductDetails/>} />


        <Route path="/*" element={<Error/>} />

        </Routes>

  </Router>
 
    </div>
  );
}

export default App;
