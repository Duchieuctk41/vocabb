import storeModel from "../models/storeModel";

let initData = (item) => {
    return new Promise(async (resolve, reject) => {
        // Kiem tra item co ton tai hay ko
        let newItem = { userId: "1234", name: "Gia đình" };
        console.log("vao store");
        let checkExists = await storeModel.checkExists(newItem);
        if (checkExists) {
            console.log("data ton tai");
            return;
        }
        console.log("thanh cong");
        let newStore = await storeModel.createNew(newItem);
        resolve(newStore);
    });
};

module.exports = {
    initData: initData,
};
