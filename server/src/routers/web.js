import express from "express";
import { home, listVocabContro, vocabContro } from "./../controllers/index";
import { listVocab, createVocab } from "./../services/index";

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

let initRouters = (app) => {
  router.get("/", home.getHome);
  router.get("/createListVocab", home.getHome, listVocab.callcreate);
  router.get("/create-vocab", createVocab.callcreate);
  router.get("/getListVocab", listVocabContro.postVocabData);
  router.get("/getVocab", vocabContro.getAll);

  return app.use("/", router);
};

module.exports = initRouters;
