import express from "express";
import ConnectDB from "./config/connectDB";
import ProductModel from "./models/product.model";
import cors from "cors";

const app = express();
app.use(cors());

// Connect mongodb
ConnectDB();

app.get("/read", async (req, res) => {
  let product = await ProductModel.getItem();
  res.status(200).send(product);
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(
    `Example app listening at http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
