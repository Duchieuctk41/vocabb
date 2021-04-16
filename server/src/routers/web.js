import express from "express";
import {
  homeContro,
  lessonContro,
  vocabContro,
  authContro,
  imageContro,
} from "./../controllers/index";
import { lessonSer, vocabSer } from "./../services/index";
import { authValid } from "./../validation/index";

import passport from "passport";
import initPassportLocal from "./../controllers/passportController/local";
const { cloudinary } = require("./../config/cloudinary");

// Init all passport
initPassportLocal();

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
  router.get("/verify/:token", authContro.verifyAccount);

  app.get("/api/images", imageContro.getImage);
  app.post("/api/upload", imageContro.uploadImage);

  return app.use("/", router);
};

module.exports = initRouters;
