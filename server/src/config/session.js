import session from "express-session";
import MongoStore from "connect-mongo";

/**
 * This variable is where save session, in this case is mongodb
 */
let sessionStore = MongoStore.create({
  mongoUrl: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  autoReconnect: true,
  // autoRemove: "native" tự động xóa cookie khi hết hạn, cái này là mặc định
});

/**
 * Config session for app
 * @param app from exactly express module
 */

let configSession = (app) => {
  app.use(
    session({
      key: "express.sid",
      secret: "mySecret",
      store: sessionStore, //mặc định lưu trên RAM
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 8640000 seconds = 1 day
      },
    })
  );
};

module.exports = configSession;
