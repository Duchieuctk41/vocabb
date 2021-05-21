import achievementModel from "../models/achievementModel";

let getAllData = async (req, res) => {
    let item = { userId: req.session.passport.user };
    // console.log(item);
    let achievement = await achievementModel.getDataByUserId(item);
    // console.log(achievement); 
    return res.send(achievement);
};

module.exports = {
    getAllData: getAllData,
};
