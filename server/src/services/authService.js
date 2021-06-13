import UserModel from "./../models/userModel";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { transErrors, transSuccess, transMail } from "./../../lang/vi";
import sendMail from "./../config/mailer";

let saltRound = 7;

let register = (age, name, email, password, protocol, host) => {
  return new Promise(async (resolve, reject) => {
    let userByEmail = await UserModel.findByEmail(email);
    if (userByEmail) {
      return reject(transErrors.account_in_use);
    }
    let salt = bcrypt.genSaltSync(saltRound);

    let userItem = {
      username: name,
      age: 17,
      local: {
        email: email,
        password: bcrypt.hashSync(password, salt),
        verifyToken: uuidv4(),
      },
    };

    let user = await UserModel.createNew(userItem);
    let linkVerify = `${protocol}://${host}/verify/${user.local.verifyToken}`;
    console.log(linkVerify);
    // send email
    sendMail(email, transMail.subject, transMail.template(linkVerify))
      .then(() => {
        resolve(transSuccess.userCreated(user.local.email));
      })
      .catch(async (error) => {
        // remove user
        await UserModel.removeById(user._id);
        console.log(error);
        reject(transMail.send_failed);
      });
  });
};

let verifyAccount = (token) => {
  return new Promise(async (resolve, reject) => {
    await UserModel.verify(token);
    try {
      resolve(transSuccess.account_actived);
    } catch (error) {
      reject(error);
    }
  });
};


let login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    let userByEmail = await UserModel.findByEmail(email);
    if (!userByEmail) {
      return reject(transErrors.account_not_use);
    }
    let salt = bcrypt.genSaltSync(saltRound);
  });
};


module.exports = {
  register: register,
  verifyAccount: verifyAccount,
  login:login
};
