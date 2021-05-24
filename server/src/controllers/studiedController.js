import studiedModel from "../models/studiedModel";

let getAllData = async (req, res) => {
    let studied = await studiedModel.getAllData();
    // console.log(studied);
    return res.send(studied);
};


module.exports = {
    getAllData: getAllData,
};
