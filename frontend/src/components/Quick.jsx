import axios from 'axios'
import {
    faPlus,
    faMinus,
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
  var quantity;


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
      const [counter, setCounter] = useState(1);
      const existItem = cart.cartItems.find((x) => x._id === item._id);
      quantity = existItem ? existItem.quantity + 1 : 1;
      var value;
    
      if (item.countInStock < quantity) {
        value = "Out of Stock";
      } else {
        value = "In Stock";
      }
     
      const Increment = () => {
        setCounter(counter + 1);
      };
    
      const Decrement = () => {
        setCounter((count) => Math.max(count - 2, 1));
      };
    


    return (
    <div className={style}>
    <div className="quick" key={item._id}>
                <div className="card-images">
                    <div className="crd-top">
                        <img src={selectedImage || item.image} alt={item.title} />
                    </div>
                </div>
        <div className="card-body">
          <div className="clearfix descr-div">
            <text className="titlename">{item.title} </text>
            <hr></hr>
            <p className='float-end price-quick'>Rs.{item.price}</p>
            <br></br>
            <text className="float-start titledesc">Description</text>
            <br></br>
            <br></br>
            <p className='float-start descript-quick'>{item.desc}</p>
            <br></br>
            <br></br>        
            <text className='float-start small-quick'>{value}</text> 

          </div>
    
        <div className='row justify-content-center align-content-center extra-row'>
        <div className="col-md-3 offset-md-1">
          <text className="float-end counter-quantity-styling">Quanitiy</text>
        </div>
        <div className="col-6 col-sm-3 ">
              <span class="float-start">
              <FontAwesomeIcon
              onClick={Decrement}
              icon={faMinus}
              class="quick-icon-styling mr-1"
   
              />
            </span>            
          <text class="counter-quantity-styling"> {counter} </text>
          <span class="float-end">
          <FontAwesomeIcon
            onClick={Increment}
            icon={faPlus}
            class="quick-icon-styling mr-1"                
              />
            </span>
          </div>
          </div>
          <div className='row extra-row '> 
          <div className="col-md-6 offset-md-3"> 
          <Link onClick={addToCartHandler}>
              <button className="but-design float-start"> Add to Cart </button>{" "}
            </Link>
            </div>
            </div>
        </div>
        </div>
        <button className='x-button'  onClick={changeStyle}>x</button>
    </div> 
    )
}

export default Quick
