
import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";
import { Store } from "../Store";
import { Scrollbars } from "react-custom-scrollbars-2";
import Navbar from "../components/Navbar";

export default function Cart() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
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
  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "CART_REMOVE_ITEM",
      payload: item,
    });
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  let cartView;
  if (cartItems.length === 0) {
    cartView = (
      <section className="main-cart-section body-style">
        <p className="total-items">
          you have{" "}
          <span className="total-items-count">{cartItems.length} </span> items
          in shopping cart
        </p>
      </section>
    );
  } else {
    cartView = (
      <section className="main-cart-section body-style">
        <p className="total-items">
          you have{" "}
          <span className="total-items-count">{cartItems.length} </span> items
          in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {cartItems.map((cartItem, i) => (
                <>
                  <div className="items-info">
                    <div className="product-img">
                      <img src={cartItem.image} alt="iamge" />
                    </div>

                    <div className="title">
                      <h2>{cartItem.title}</h2>
                      <p>{cartItem.brand}</p>
                    </div>

                    <div className="add-minus-quantity">
                      <i
                        className="fas fa-minus minus i-style"
                        onClick={() =>
                          updateCartHandler(cartItem, cartItem.quantity - 1)
                        }
                        disabled={cartItem.quantity === 1}
                      ></i>
                      <input
                        type="text"
                        placeholder={cartItem.quantity}
                        disabled
                      />
                      <i
                        className="fas fa-plus add i-style"
                        onClick={() =>
                          updateCartHandler(cartItem, cartItem.quantity + 1)
                        }
                      ></i>
                    </div>

                    <div className="price">
                      <h3>${cartItem.price}</h3>
                    </div>

                    <div className="remove-item">
                      <i
                        className="fas fa-trash-alt remove i-style"
                        onClick={() => removeItemHandler(cartItem)}
                      ></i>
                    </div>
                  </div>

                  <hr />
                </>
              ))}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)
            : ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </h3>

          <button
            onClick={checkoutHandler}
            className="checkout-cart"
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <header>
        <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
          <h1 class="text-white cart-heading">Shopping Cart</h1>
        </div>
      </header>

      {cartView}
    </>
  );
}
