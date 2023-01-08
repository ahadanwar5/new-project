import express, { request } from "express";
import Product from "../models/product_model.js";

const productRouter = express.Router();

//To get all products
productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get("/medicines", async (req, res) => {
  const products = await Product.find();
  let medicinesProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Medicines") {
      medicinesProducts.push(products[i]);
    }
  }

  res.send(medicinesProducts);
});

productRouter.get("/personal", async (req, res) => {
  const products = await Product.find();
  let personalProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Personal Care") {
      personalProducts.push(products[i]);
    }
  }

  res.send(personalProducts);
});
productRouter.get("/lifestyle", async (req, res) => {
  const products = await Product.find();
  let lifestyleProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Lifestyle") {
      lifestyleProducts.push(products[i]);
    }
  }

  res.send(lifestyleProducts);
});

productRouter.get("/organic", async (req, res) => {
  const products = await Product.find();
  let organicProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Organic") {
      organicProducts.push(products[i]);
    }
  }

  res.send(organicProducts);
});
productRouter.get("/health", async (req, res) => {
  const products = await Product.find();
  let healthProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Health Care") {
      healthProducts.push(products[i]);
    }
  }

  res.send(healthProducts);
});
productRouter.get("/carebaby", async (req, res) => {
  const products = await Product.find();
  let carebabyProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Carebaby") {
      carebabyProducts.push(products[i]);
    }
  }

  res.send(carebabyProducts);
});

//For a single product
productRouter.get("/:slug", async (req, res) => {
  console.log(req.params.slug)
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default productRouter;
