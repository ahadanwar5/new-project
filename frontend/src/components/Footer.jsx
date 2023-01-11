import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
function Footer() {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6  col-md-3 item">
              <h3>SERVICES</h3>
              <ul>
                <li>
                  <a href="#">Carebay</a>
                </li>
                <li>
                  <a href="#">Organic</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Medicines</a>
                </li>
                <li>
                  <a href="#">Health Care</a>
                </li>

                <li>
                  <a href="#">Personal Care</a>
                </li>

              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>ABOUT</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>PARADOCS</h3>
              <p>
                Welcome to our pharmacy website! We are a dedicated team of
                healthcare professionals who are committed to providing you with
                the best possible service and the highest quality of care.
              </p>
              <div  className="col-md-6 float-end item btmimg">
              <img  src="https://lirp.cdn-website.com/8592f054/dms3rep/multi/opt/payment-methods-1920w.png" alt="paymentmethods" />
              </div>
              </div>

            <div class="col item social">
              <Link>
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </Link>
              <Link>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link>
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </Link>
            </div>
 
          </div>
          <p>Paradocs © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
