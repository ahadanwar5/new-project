import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6  col-md-3 item">
              <h3>SERVICES</h3>
              <ul>
              <ScrollToTop/>
                <li>
                <Link to={'/shop/Carebaby'} >
                 Carebaby
                </Link>
                </li>
                <li>
                <Link to={'/shop/Organic'} >
                 Organic
                </Link>
                </li>
                <li>
                <Link to={'/shop/Lifestyle'} >
                 Lifestyle
                </Link>
                </li>
                <li>
                <Link to={'/shop/Medicines'} >
                 Medicines
                </Link>
                </li>
                <li>
                <Link to={'/shop/HealthCare'} >
                 Healthcare
                </Link>
                </li>

                <li>
                <Link to={'/shop/PersonalCare'} >
                 Personal Care
                </Link>
                </li>

              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <Link to={'/shop'} >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to={'/about'} >
                    About
                  </Link>
                </li>
                <li>
                  <Link to={'/contact'} >
                    Contacts Us
                  </Link>
                </li>
                <li>
                  <Link to={'/delivery'} >
                    Delivery Information
                  </Link>
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
