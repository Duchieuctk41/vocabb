import { cloudinary } from "./../config/cloudinary";

let getImage = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:lesson")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};

let uploadImage = async (req, res) => {
  try { 
  let successArr = [];
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "lesson",
    });
    // console.log(uploadResponse.secure_url);
    res.json({ msg: uploadResponse.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
};

module.exports = {
  getImage: getImage,
  uploadImage: uploadImage,
};
