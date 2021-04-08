import express from "express";
import expressEjsExtend from "express-ejs-extend";

/**
 * Config viewEngine for app
 * @param app from exactly express module
 */

let configViewEngine = (app) => {
  app.use(express());
  app.use("ejs", expressEjsExtend);
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
