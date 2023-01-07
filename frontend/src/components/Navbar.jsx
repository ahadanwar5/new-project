import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light navbar-styling" height="100">
<a class="navbar-brand ml-5" href="#">
    <img src="/images/logo/logo.png" width="250" height="40" alt=""/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#"><span class="nav-links-styling">Home</span> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#"><span class="nav-links-styling">Products</span> <span class="sr-only">(current)</span></a>

      <a class="nav-item nav-link" href="#"><span class="nav-links-styling">About</span> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#"><span class="nav-links-styling">Blog</span> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#"><span class="nav-links-styling">Delivery</span> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#"><span class="nav-links-styling">Contact</span> <span class="sr-only">(current)</span></a>
   </div>
  </div>
</nav>
  );
}
