import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import cors from "cors";
import initRouters from "./routers/web";
import bodyParser from "body-parser";

// Init app
const app = express();

// Enable client connect
app.use(cors());

// Connect mongodb
ConnectDB();

// Config view engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Init all Routers
initRouters(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(
    `Example app listening at http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
