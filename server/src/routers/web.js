import express from "express";
import { home, listVocabContro } from "./../controllers/index";
import { listVocab } from "./../services/index";

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

let initRouters = (app) => {
  router.get("/", home.getHome);
  router.get("/createListVocab", home.getHome, listVocab.callcreate);
  router.get("/getListVocab", listVocabContro.postVocabData);

  return app.use("/", router);
};

module.exports = initRouters;
