import UserModel from "./../models/userModel";
import bcrypt from "bcrypt";
import uuidv4 from "uuid/v4";
import { transErrors, transSuccess } from "./../../lang/vi";

let saltRound = 7;

let register = (age, name, email, password) => {
  return new Promise(async (resolve, reject) => {
    let userByEmail = await UserModel.findByEmail(email);
    if (userByEmail) {
      return reject(transErrors.account_in_use);
    }
    let salt = bcrypt.genSaltSync(saltRound);

    let userItem = {
      username: name,
      age: age,
      local: {
        email: email,
        password: bcrypt.hashSync(password, salt),
        verifyToken: uuidv4(),
      },
    };

    let user = await UserModel.createNew(userItem);
    resolve(transSuccess.userCreated(user.local.email));
  });
};

module.exports = {
  register: register,
};
