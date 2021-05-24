import storeModel from "../models/storeModel";

let getDataByUserId = async (req, res) => {
    let item = { userId: req.session.passport.user };
    // console.log(item);
    let store = await storeModel.getDataByUserId(item);
    // console.log(store); 
    return res.send(store);
};

module.exports = {
    getDataByUserId: getDataByUserId,
};
