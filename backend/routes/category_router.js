import express, { request } from "express";
import Category from "../models/category_model.js";
const categoryRouter = express.Router();

//To get all products
categoryRouter.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});


export default categoryRouter;