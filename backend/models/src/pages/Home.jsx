import React, { useEffect, useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Store } from "../Store";
function Home() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish, userInfo } = state; //Comes from the initial state
  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/login";
  };
  return (
    <div>
      <Navbar />
      
      <button onClick={signoutHandler}>Signout</button>
      <Footer />
    </div>
  );
}

export default Home;
