import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import SideMenu from "./components/SideMenu";
import Filters from "./pages/Filters";
import Contact from "./pages/Contact";
import Lagalleria from "./pages/Lagalleria";
import Photobooths from "./pages/Photobooths";
import EventDetails from "./pages/EventDetails";
import EventList from "./pages/EventList";
import Rome from "./pages/Rome";



function App() {
  return (
    <div>

<Router>

  <SideMenu/>

  <Cart/> 
        <Routes>


          
         

        <Route path="/" element={<Home />} />

        <Route path="/Rome" element={<Rome />} />

        <Route path="/Shop" element={<Shop />} />

        <Route path="/Cart" element={<Cart />} />


        <Route path="/Contact" element={<Contact />} />

        <Route path="/Filters" element={<Filters />} />

        <Route path="/Photobooths" element={<Photobooths />} />

        <Route path="/Lagalleria" element={<Lagalleria />} />

      

        <Route path="/products/:handle" element={<ProductDetails/>} />
        
        <Route path="/ProductDetails" element={<ProductDetails/>} />

        <Route path="/EventDetails/:id" element={<EventDetails/>} />

        <Route path="/EventList" element={<EventList/>} />

        <Route path="/*" element={<Error/>} />

        </Routes>

  </Router>
 
    </div>
  );
}

export default App;
