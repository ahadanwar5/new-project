import axios from 'axios'
import {
    faCartShopping,
    faHeart,
    faShoppingCart,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import { Store } from '../Store';
import '../styles/quick.css'

const Quick = ({item}) => {
  //for change image
  const [selectedImage, setSelectedImage] = useState(''); //default is empty

  //For close PopUp
  const [style, setStyle] = useState("main-container");
  
  const changeStyle = () => {
  
    setStyle("main-containerOne");
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {cart, wish} = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1; //if existItem than quantity + 1 in cart if not than 1

    const { data } = await axios.get(`/api/products/${item.slug}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };



    const addToWishHandler = () => {
        const existItem = wish.wishItems.find((x) => x._id === item._id);
        const quantity = existItem ? existItem.quantity : 1;
    
        if (existItem) {
          window.alert(
            "Sorry. You have already added the product to your wish list."
          );
          return;
        }
    
        ctxDispatch({
          type: "WISH_ADD_ITEM",
          payload: { ...item, quantity },
        });
      };
    


    return (
    <div className={style}>
    <div className="card-quick" key={item._id}>
                <div className="card-images">
                    <div className="card-top">
                        <img src={selectedImage || item.image} alt={item.title} />
                    </div>
                </div>
        <div class="card-body">
          <div class="clearfix mb-2">
            <span class="float-start product-list-title-styling">
              {item.title}
            </span>
          </div>
        <span class=" d-block float-start product-list-price-styling">
            Rs {item.price}
        </span>
          
        <div className='justify-content-evenly'>  
        <h5 class="float-start ">{item.desc}</h5> 
        </div>
        
        
        <div class="btn-group">
            <span class="float-end">
              <FontAwesomeIcon
                onClick={addToWishHandler}
                icon={faHeart}
                class="wishlist-icon-styling mr-1"
              />
            </span>
            <span class="float-end">
              <FontAwesomeIcon
                onClick={addToCartHandler}
                icon={faCartShopping}
                class="wishlist-icon-styling mr-1"
              />
            </span>
        </div>
        </div>
        </div>
        <button className='back'  onClick={changeStyle}>Close</button>
    </div> 
    )
}

export default Quick
