import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/shipping.css";
import { Store } from "../Store";


const Shipping = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=/shipping");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate("/placeorder");
  };

  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div class="card-img-left d-none d-md-flex"></div>
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-3 fw-light" style={{fontSize:30, color:"rgb(12,43,20)", fontFamily:"Inter-Medium"}}>
                  Shipping Details
                </h5>
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputUsername"
                      placeholder="myusername"
                      required
                      autofocus
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label for="floatingInputUsername">Full Name</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputEmail"
                      placeholder="name@example.com"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <label for="floatingInputEmail">Address</label>
                  </div>

                

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <label for="floatingPassword">City</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPasswordConfirm"
                      placeholder="Confirm Password"
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <label for="floatingPasswordConfirm">Postal Code</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPasswordConfirm"
                      placeholder="Confirm Password"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                    <label for="floatingPasswordConfirm">Country</label>
                  </div>
       
                  <div class="d-grid mb-2">
                    <button
                      class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
