import lessonModel from "../models/lessonModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let checkExists = await lessonModel.checkExists(item);
    if (checkExists) {
      console.log("Data da ton tai");
      return ;
    }

    let newItem = item;
    //console.log(newItem); 
    let newListVocab = lessonModel.createNew(newItem);
    resolve(newListVocab);
  });
};

let listItem = [
  { name: "Cơ bản" },
  { name: "Chào hỏi" },
  { name: "Giới thiệu" },
  { name: "Gia đình" },
  { name: "Mua sắm" },
  { name: "Xã hội" },
  { name: "Nhà hàng" },
  { name: "Trường học" },
  { name: "Các sự vật" },
  { name: "Sở hữu" },
  { name: "Con người" },
  { name: "Trang phục" },
  { name: "Màu sắc" },
  { name: "Thời gian" },
  { name: "Công việc" },
];

let initData = () => {
  for (let i = 0; i < listItem.length; i++) {
    createNewItem(listItem[i]);
  }
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
