import axios from "axios";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

import {
  faTruckFast,
  faCartShopping,
  faCreditCard,
  faHeart,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardBody,
  CardHeader,
  Table,
  Button,
  Spinner,
  CardFooter
} from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { Store } from "../Store";

import '../styles/placeorder.css'

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

      <header>
        <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
          <h1 class="text-white cart-heading">Order Summary</h1>
        </div>
       </header>  

      <Card className="product-display">
     <CardBody>
      <div className="cart-button">
          <div class="btn-group">
            <Link to="/cart">
              <button class="btn" data-toggle="tooltip">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  class="product-list-icon-styling"
                />
              </button>
            </Link>
            <span class="badge badge-danger bdge-style">
              {cart.cartItems.length}
            </span>
          </div>
          </div>
          {/* </CardBody> */}
        <Card>
          <CardHeader>
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            </Table>
          </CardHeader>
        <CardBody >

          <div className="shop-items-container">
            <Scrollbars>
          <Table responsive>
            <tbody>
            {cart.cartItems.map((item) => (
                <tr>
                  <td><img src={item.image} alt={item.title} width={100} height={150} /></td>
                  <td> {item.title} </td>
                  <td>{item.quantity}</td>
                  <td>Rs.{item.price.toFixed(2)}</td>
                </tr>
              ))}

            </tbody>
          </Table>
          </Scrollbars>
         </div>

        </CardBody>
      </Card>
      </CardBody>
      <CardFooter>
      <div className="row">
        <div className="clearfix col-9   justify-content-start">
           <div className="row ">            
            <h3 className="title-ship float-start">
              Shipping Information
              <hr></hr>
            </h3>
            </div>
            <div className="row">
            <div className="d-flex flex-row bd-highlight mb-2 clearfix float-start">
            <div className="p-2 bd-highlight">  
            <span className="ordersum">        
          <FontAwesomeIcon
                  icon={faTruckFast}
                  class="order-but"
                /> Street Address:
              </span>              
            </div>
            <div className="p-1 bd-highlight mb-1">
            </div>
            <div className="p-1 bd-highlight mb-1">
            <p className="address-det">               
              House#no:  {cart.shippingAddress.address}, <br />
              City:{cart.shippingAddress.city},{" "}<br/>
              Postal Code:{cart.shippingAddress.postalCode}{" "} <br/>
              Country :{cart.shippingAddress.country}{" "} 
            </p> </div>  
            </div>
            <br></br>
            </div>
{/* /*asdad*/  }
<div className="row">
<br></br>
 <h3 className="title-ship float-start">
              Billing Information
              <hr></hr>
            </h3>

<div className="d-inline-flex flex-row bd-highlight mb-1 clearfix ">            
            <div className="p-2 bd-highlight">  
            <span className="ordersum">        
             <FontAwesomeIcon
                  icon={faCreditCard}
                  class="order-but"
                />  Payment Details:
                </span>
            </div>
            <div className="p-1 bd-highlight mb-1">
            
            </div>
            <div className="p-3 bd-highlight mb-1">
            <p className="address-det">               
              Cash on Delivery             </p> </div>  
            </div>
           
            </div>
            </div>
        <div className="col-3 offset-md-12 clearfix align-items-center">
          <Table responsive>
          <h6 >
              Order Details
          </h6>
            <tbody>
                  <tr>
                    {/* <td></td> */}
                    <td>
                      <text className="float-start">
                      Items Total: Rs.{cart.itemsPrice.toFixed(2)}
                      </text>
                      </td>
                  </tr>
                  <tr>
                    {/* <td>Shipping:</td> */}
                    
                    <td>
                    <text className="float-start">
                      Shipping: Rs.{cart.shippingPrice.toFixed(2)}
                      </text>
                      </td>
                  </tr>
                  <tr>
                    {/* <td>Tax: </td> */}
                    <td>
                    <text className="float-start">
                    Tax: Rs.{cart.taxPrice.toFixed(2)}
                    </text>
                    </td>
                  </tr>
                  <tr>
                    {/* <td>Total:</td> */}
                    <td>
                    <text className="float-start">
                    Total: Rs.{cart.totalPrice.toFixed(2)}
                    </text>
                    </td>
                  
                  </tr>
            </tbody>

            {loading ? (
              <Spinner color="primary" />
            ) : (
              <Button className="order-button" onClick={placeOrderHandler}>
                Confirm Order
              </Button>
            )}

          </Table>
        </div>
</div>
      </CardFooter>
      </Card>


      
      <Footer />
    </>
  );
};

export default PlaceOrder;


 
