import express from "express";
import { home } from "./../controllers/index";

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

let initRouters = (app) => {
  router.get("/", home.getHome);

  return app.use("/", router);
};

module.exports = initRouters;
