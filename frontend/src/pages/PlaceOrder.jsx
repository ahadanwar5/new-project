import axios from "axios";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

const PlaceOrder = () => {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  //price
  const roundPrice = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = roundPrice(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? roundPrice(0) : roundPrice(10);
  cart.taxPrice = roundPrice(0.05 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });

      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: "CART_CLEAR" });
      dispatch({ type: "CREATE_SUCCESS" });
      localStorage.removeItem("cartItems");
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  };

  return (
    <>
      <Navbar />
      <p>
        {cart.shippingAddress.fullName}, {cart.shippingAddress.address},{" "}
        {cart.shippingAddress.postalCode}, {cart.shippingAddress.city},{" "}
        {cart.shippingAddress.country}{" "}
      </p>
      
      {cart.cartItems.map((item) => (
        <div>{item.title}</div>
      ))}

      <span>${cart.itemsPrice.toFixed(2)}</span>
      <span>${cart.shippingPrice.toFixed(2)}</span>
      <span>${cart.taxPrice.toFixed(2)}</span>
      <span>${cart.totalPrice.toFixed(2)}</span>

      <button onClick={placeOrderHandler}>Place Order</button>
      <Footer />
    </>
  );
};

export default PlaceOrder;
