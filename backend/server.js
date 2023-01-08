import express, { response } from "express";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seed_router.js";
import productRouter from "./routes/product_router.js";
import categoryRouter from "./routes/category_router.js";
import userRouter from "./routes/user_router.js";
import orderRouter from "./routes/order_router.js"
const website_express = express();

website_express.use(express.json());
website_express.use(express.urlencoded({ extended: true }));
dotenv.config();

mongoose
  .connect(process.env.MongoDB_Connection_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error.message);
  });

//We create a port of 3002 if there is no working port processing in the environment
const port = process.env.PORT || 4000;

//If a call is made to this port, it would do the following
website_express.listen(port, () => {
  console.log("Connected to port", port);
});

//If a request is made to fetch data for category from front end, the response would be send from here
// website_express.get("/api/category", (request, response) => {
//   response.send(data.category);
// });

//If a request is made to fetch data for category from front end, the response would be send from here
website_express.get("/api/slider", (request, response) => {
  response.send(data.sliderItems);
});

website_express.use("/api/seed/", seedRouter);
website_express.use("/api/products/", productRouter);
website_express.use("/api/category/", categoryRouter);
website_express.use("/api/users/", userRouter);
website_express.use("/api/orders/",orderRouter);
