import express from "express";
import ConnectDB from "./config/connectDB";
import ProductModel from "./models/product.model";
import cors from "cors";

const app = express();
app.use(cors());

// Connect mongodb
ConnectDB();

const localhost = "localhost";
const port = 3001;

app.get("/read", async (req, res) => {
  let product = await ProductModel.getItem();
  res.status(200).send(product);
});

app.listen(port, localhost, () => {
  console.log(`Example app listening at http://${localhost}:${port}`);
});
