import express from "express";
import Product from "../models/product_model.js";
import Category from "../models/category_model.js";
import User from "../models/user_model.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  await Category.remove({});
  await User.remove({});

  const createdProducts = await Product.insertMany(data.products);
  const createdCategories = await Category.insertMany(data.category);
  
  const createdUser = await User.insertMany(data.users);

  res.send({ createdProducts,createdCategories, createdUser });
});

export default seedRouter;
