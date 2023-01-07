import axios from "axios";

import React, { useContext } from "react";

import { Store } from "../Store";


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
    <div class="col-md-4">
      <figure class="card card-product-grid">
        <div class="img-wrap">
          <img src={item.image} />
          <a class="btn-overlay" href="#">
            <i class="fa fa-search-plus"></i> Quick view
          </a>
        </div>
        <figcaption class="info-wrap">
          <div class="fix-height">
            <a href="#" class="title">
              {item.title}
            </a>
            <div class="price-wrap mt-2">
              <span class="price">{item.price}</span>
            </div>
            <div class="price-wrap mt-2">
              <p class="price">{item.desc}</p>
            </div>
          </div>
          <a href="#" class="btn btn-block btn-primary mt-4" onClick={addToCartHandler}>
            Add to cart{" "}
          </a>
        </figcaption>
      </figure>
    </div>
    //      <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(238,238,228)' }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="200"
    //       width="200"
    //       image={item.image} //Change
    //       alt={item.title}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {item.title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {item.price}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="large" color="primary">
    //       Shop Now
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default ProductShop;
