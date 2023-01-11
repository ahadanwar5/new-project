import axios from "axios";
import React, { useEffect, useReducer, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/ProductScreen.css";
import {
  faChevronRight,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getError } from "../utils";
import { Link } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;

  //counter
  const [counter, setCounter] = useState(1);

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  const navigate = useNavigate();

  var quantity;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    quantity = existItem ? existItem.quantity + counter : counter; 

    //this you can put but you don’t have to
    const { data } = await axios.get(`/api/products/${product.slug}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }

    console.log(value);

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });

    navigate("/cart");
  };

  const addToWishHandler = async () => {
    const existItem = wish.wishItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity : 1;

    //const { data } = await axios.get(`/api/products/slug/${product.slug}`);
    if (existItem) {
      window.alert(
        "Sorry. You have already added the product to your wish list."
      );
      return;
    }

    ctxDispatch({
      type: "WISH_ADD_ITEM",
      payload: { ...product, quantity },
    });

    navigate("/wish");
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  //IN stock and out of Stock
  const existItem = cart.cartItems.find((x) => x._id === product._id);
  quantity = existItem ? existItem.quantity + 1 : 1;
  var value;

  if (product.countInStock < quantity) {
    value = "Out of Stock";
  } else {
    value = "In Stock";
  }
  // end



  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter((count) => Math.max(count - 2, 1));
  };


  //end
  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>error</div>
  ) : (
    <div>
      <div class="maindiv">
        <Navbar />

        <div class="flexdiv">
          <div class="pic">
            <img src={product.image}></img>
          </div>

          <div class="detail">
            <text class="titlename">{product.title} </text>
            <hr></hr>

            <p>Rs.{product.price}</p>

            <p>Product by: {product.brand}</p>
             
          
          <button class="counter" onClick={Increment}>
            +
          </button>
          <text class="counter-quantity-styling"> {counter} </text>
          <button class="counter" onClick={Decrement}>
            -
          </button>
      <br/>
      <br/>
       
    
      
            <p>{value}</p>
          

            <Link onClick={addToCartHandler}>
              <button class="design"> Add to Cart </button>{" "}
            </Link>

            <br></br>
            <br></br>

            <text class="text1">Description:</text>
            <br></br>
            <br></br>
            <p>{product.desc}</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProductScreen;