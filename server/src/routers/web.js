import express from "express";
import { homeContro, lessonContro, vocabContro } from "./../controllers/index";
import { lessonSer, vocabSer } from "./../services/index";

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

let initRouters = (app) => {
  router.get("/", homeContro.getHome);
  router.get("/initLesson", lessonSer.initData);
  router.get("/initVocab", vocabSer.initData);
  router.get("/api-lesson", lessonContro.getAllData);
  router.get("/api-vocab", vocabContro.getAllData);

  return app.use("/", router);
};

module.exports = initRouters;
