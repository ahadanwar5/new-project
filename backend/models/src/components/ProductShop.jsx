import axios from "axios";

import React, { useContext } from "react";

import { Store } from "../Store";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import "../styles/ProductShop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductShop = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
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
 

    <div class="col hp">
      <div class="card h-90 shadow-sm card-styling-boundary">
        <img src={item.image} class="card-img-top" alt="product.title" />

        <div class="label-top shadow-sm">
          <a class="text-white" href="#">
            {item.brand}
          </a>
        </div>
        <div class="card-body">
          <div class="clearfix mb-2">
            <span class="float-start product-list-title-styling">
              {item.title}
            </span>
           
          </div>

          <div class="clearfix">
          <span class=" d-block float-start product-list-price-styling">
            Rs {item.price}
          </span>
           
          </div>
          
          <br />
          <h5 class="card-title">{item.desc}</h5>

          <div class="d-grid gap-2 my-4">
            <button onClick={addToCartHandler} class="btn btn-primary bold-btn">
              add to cart
            </button>
          </div>
          <div class="clearfix mb-1">
            <span class="float-start">
              <a href="#">
                <i class="fas fa-question-circle"></i>
              </a>
            </span>

            <span class="float-end">
              <FontAwesomeIcon
                onClick={addToWishHandler}
                icon={faHeart}
                class="wishlist-icon-styling mr-1"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
