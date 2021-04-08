import express from "express";
import {
  homeContro,
  lessonContro,
  vocabContro,
  authContro,
} from "./../controllers/index";
import { lessonSer, vocabSer } from "./../services/index";
import { authValid } from "./../validation/index";

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

let initRouters = (app) => {
  router.get("/", homeContro.getHome);
  router.get("/init-lesson", lessonSer.initData);
  router.get("/init-vocab", vocabSer.initData);
  router.get("/api-lesson", lessonContro.getAllData);
  router.get("/api-vocab", vocabContro.getAllData);

  router.post("/register", authValid.register, authContro.postRegister);
  router.get("/login-register", authContro.getLoginRegister);

  return app.use("/", router);
};

module.exports = initRouters;
