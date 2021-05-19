import express from "express";
import { homeContro, lessonContro, vocabContro, authContro, imageContro, questionContro, gameContro } from "./../controllers/index";
import { lessonSer, vocabSer, gameSer, questionSer, studiedSer } from "./../services/index";
import { authValid } from "./../validation/index";

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
  router.get("/init-lesson", lessonSer.initData); // tạo CSDL bài học
  router.get("/init-vocab", vocabSer.initData); // tạo CSDL từ vựng
  router.get("/init-game", gameSer.initData); // tạo CSDL game
  router.get("/init-question", questionSer.initData); // tạo CSDL câu hỏi
  router.get("/init-studied", studiedSer.initData); // cập nhật thành tích học tập

  router.get("/api-lesson", lessonContro.getAllData);
  router.get("/api-vocab", vocabContro.getAllData);
  router.get(`/api-question/:id`, questionContro.getCollection);
  router.get("/api-game/:id", gameContro.getCollection);
  router.get("/api-idgames", gameContro.getIdGames);

  router.post("/register", authValid.register, authContro.postRegister);
  router.get("/verify/:token", authContro.verifyAccount);
  router.post("/login", authContro.postLogin);

  router.get("/logout", authContro.getLogout);
  router.get("/check-login", authContro.checkLoggedIn);
  router.get("/check-logout", authContro.checkLoggedOut);

  app.get("/api/images", imageContro.getImage);
  app.post("/api/upload", imageContro.uploadImage);

  return app.use("/", router);
};

module.exports = initRouters;
