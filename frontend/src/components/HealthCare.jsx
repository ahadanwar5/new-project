import {
    faChevronRight,
    faCartShopping,
    faHeart,faChevronLeft
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import axios from "axios";
  import React, { useEffect, useState, useContext } from "react";
  //import {products} from '../data.js' //but for now -> is not good
  
  import ReactPaginate from "react-paginate";
  import { Link, NavLink } from "react-router-dom";
  import ProductShop from "./ProductShop";
  import { Store } from "../Store";
  import "../styles/ProductsShop.css";
  import Navbar from "./Navbar"
  import Footer from "./Footer";
  import "../styles/pagination.css";
  const HealthCare = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish, userInfo } = state; //Comes from the initial state
  
    let [fetchedProducts, setFetchedProducts] = useState([]);
    //for filter category and all products
    const [products, setProducts] = useState([]);
  
    //for category
    const [category, setCategory] = useState([]);
  
    //for paginate
    const [pageNumber, setPageNumber] = useState(0);
  
    const productPerPage = 12;
  
    const pagesVisited = pageNumber * productPerPage;
  
    const displayProducts = products
      .slice(pagesVisited, pagesVisited + productPerPage)
      .map((item) => <ProductShop item={item} key={item._id} />);
  
    const pageCount = Math.ceil(products.length / productPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected); //if i click page number 2 than selected is number 2
    };
  
    useEffect(() => {
      const fetchProducts = async () => {
        const reponse = await axios.get("/api/products/health");
        setProducts(reponse.data);
        setFetchedProducts(reponse.data);
      };
  
      fetchProducts();
    }, []);
    //for show all category
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get("/api/category");
        setCategory(result.data);
      };
      fetchData();
    }, []);
  
    return (
      <>
      <Navbar/>
        <header>
          <div class="bg-image d-flex justify-content-center align-items-center cart-heading-title">
            <h1 class="text-white cart-heading">Health Care</h1>
          </div>
        </header>
        <section class="section-content mt-5">
          <hr />
          <div class="container">
            <div class="row category-row-styling">
              <div class="col category-styling1">
                <Link to="/shop/Medicines">
                  <span class="category-styling">Medicines</span>
                </Link>
              </div>
              <div class="col category-styling2">
                <Link to="/shop/Lifestyle">
                  <span class="category-styling">Lifestyle</span>
                </Link>
              </div>
              <div class="col category-styling2">
                <Link to="/shop/PersonalCare">
                  <span class="category-styling">Personal Care</span>
                </Link>
              </div>
              <div class="col category-styling2">
                <Link to="/shop/Carebaby">
                  <span class="category-styling">Carebaby</span>
                </Link>
              </div>
              <div class="col category-styling2">
                <Link to="/shop/Organic">
                  <span class="category-styling">Organic</span>
                </Link>
              </div>
              <div class="col category-styling3">
                <Link to="/shop/HealthCare">
                  <span class="category-styling">Health Care</span>
                </Link>
              </div>
            </div>
          </div>
          <hr />
        </section>
  
        <section class="section-content mt-5">
          <div class="container">
            <div class="row">
            
              <main class="col-md-12">
                <header class="border-bottom mb-4 pb-3">
                  <div class="form-inline">
                    <span class="mr-md-auto">{products.length} Items found </span>
  
                    <div class="btn-group">
                      <Link to="/cart">
                        <button class="btn" data-toggle="tooltip">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            class="product-list-icon-styling"
                          />
                        </button>
                      </Link>
                      <span class="badge badge-danger badge-styling">
                        {cart.cartItems.length}
                      </span>
                      <Link to="/wish">
                        <button class="btn" data-toggle="tooltip">
                          <FontAwesomeIcon
                            icon={faHeart}
                            class="product-list-icon-styling"
                          />
                        </button>
                      </Link>
                      <span class="badge badge-danger badge-styling">
                        {wish.wishItems.length}
                      </span>
                    </div>
                  </div>
                </header>
  
                
              </main>
            </div>
          </div>
        </section>
        <div class="container-fluid container-fluid-styling">
          <div class="container mt-4" style={{ position: "relative" }}>
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
              {displayProducts}
            </div>
          </div>
          <div class="container-fluid pagination-grid">
          <div></div>
          <div>
            <ReactPaginate
              activeClassName={"pagination-item paginate-active "}
              breakClassName={"pagination-item"}
              breakLabel={"..."}
              containerClassName={"pagination-styling"}
              disabledClassName={"disabled-paginate-page"}
              marginPagesDisplayed={2}
              nextClassName={"pagination-item2 pagination-next "}
              nextLabel={
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ fontSize: 18, width: 150 }}
                />
              }
              onPageChange={changePage}
              pageCount={pageCount}
              pageClassName={"pagination-item pagination-page "}
              pageRangeDisplayed={2}
              previousClassName={"pagination-item2 pagination-previous"}
              previousLabel={
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ fontSize: 18, width: 150 }}
                />
              }
            />
          </div>
          <div></div>
        </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default HealthCare;
  