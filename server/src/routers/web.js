import express from "express";
import { homeContro, lessonContro, vocabContro, authContro, imageContro, questionContro, gameContro, studiedContro } from "./../controllers/index";
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
  
  // Tạo cơ sở dữ liệu
  router.get("/init-lesson", lessonSer.initData); // tạo CSDL bài học
  router.get("/init-vocab", vocabSer.initData); // tạo CSDL từ vựng
  router.get("/init-game", gameSer.initData); // tạo CSDL game
  router.get("/init-question", questionSer.initData); // tạo CSDL câu hỏi
  router.get("/init-studied", studiedSer.initData); // cập nhật thành tích học tập

  // Api
  router.get("/api-lesson", lessonContro.getAllData); // Lấy các bài học
  router.get("/api-lessonid/:id", lessonContro.getLessonById); // Lấy các bài học
  router.get("/api-vocab", vocabContro.getAllData); // Lấy dữ liệu vocab - cái này hiện ko dùng
  router.get(`/api-question/:id`, questionContro.getCollection); // Lấy câu hỏi
  router.get("/api-game/:id", gameContro.getCollection); // Lấy danh sách câu hỏi trong game
  router.get("/api-idgames", gameContro.getIdGames); // Lấy id game
  router.get("/api-userid", authContro.getUser);
  router.get("/update-grade/:id", studiedSer.updateGrade);
  router.get("/api-studied",studiedContro.getAllData);


  // Đăng ký, đăng nhập, đăng xuất
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
