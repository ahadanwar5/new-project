import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Medicines from "./components/Medicines";
import Lifestyle from "./components/Lifestyle";
import Organic from "./components/Organic";
import HealthCare from "./components/HealthCare";
import Carebaby from "./components/Carebaby";
import PersonalCare from "./components/PersonalCare";
import ProductScreen from "./components/ProductScreen";
import Shipping from "./components/Shipping";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/Medicines" element={<Medicines />} />
          <Route path="/shop/Lifestyle" element={<Lifestyle />} />
          <Route path="/shop/Organic" element={<Organic />} />
          <Route path="/shop/HealthCare" element={<HealthCare />} />
          <Route path="/shop/Carebaby" element={<Carebaby />} />
          <Route path="/shop/PersonalCare" element={<PersonalCare />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
