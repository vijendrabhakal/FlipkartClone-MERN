import express from "express";

import { userSignup, userLogin } from "../controllers/userController.js";

import { getProducts } from "../controllers/productController.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);

Router.get("/products", getProducts);

export default Router;
