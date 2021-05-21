import express from "express";
import { homeContro, lessonContro, vocabContro, authContro, imageContro, questionContro, gameContro, studiedContro, achievementContro } from "./../controllers/index";
import { lessonSer, vocabSer, gameSer, questionSer, studiedSer, achievementSer } from "./../services/index";
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
  router.get("/init-vocab/:id", vocabSer.initData); // tạo CSDL từ vựng
  router.get("/init-game", gameSer.initData); // tạo CSDL game
  router.get("/init-question", questionSer.initData); // tạo CSDL câu hỏi
  router.get("/init-studied", studiedSer.initData); // cập nhật thành tích học tập
  router.get("/init-achievement", achievementSer.initData); // Tạo bảng thành tích học tập

  // Api lấy dữ liệu
  router.get("/api-lesson", lessonContro.getAllData); // Lấy các bài học
  router.get("/api-lessonid/:id", lessonContro.getLessonById); // Lấy các bài học
  router.get("/api-vocab", vocabContro.getDataByUserId); // Lấy dữ liệu vocab flashcard
  router.get(`/api-question/:id`, questionContro.getCollection); // Lấy câu hỏi
  router.get("/api-game/:id", gameContro.getCollection); // Lấy danh sách câu hỏi trong game
  router.get("/api-idgames", gameContro.getIdGames); // Lấy id game
  router.get("/api-userid", authContro.getUser); // Lấy userid
  router.get("/api-studied",studiedContro.getAllData);
  router.get("/api-achievement", achievementContro.getAllData);

  // Update dữ liệu
  router.get("/update-grade/:id", studiedSer.updateGrade);
  router.put("/update-achievement", achievementSer.updateAchievement);

  // Đăng ký, đăng nhập, đăng xuất
  router.post("/register", authValid.register, authContro.postRegister);
  router.get("/verify/:token", authContro.verifyAccount);
  router.post("/login", authContro.postLogin); //Đăng nhập
  router.get("/logout", authContro.getLogout);
  router.get("/check-login", authContro.checkLoggedIn); // Kiểm tra đăng nhập hay chưa
  router.get("/check-logout", authContro.checkLoggedOut);

  app.get("/api/images", imageContro.getImage);
  app.post("/api/upload", imageContro.uploadImage);

  return app.use("/", router);
};

module.exports = initRouters;
