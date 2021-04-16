import React from "react";
import Cloudinary from "./../../components/cloudinary/cloudinary.component";
import GetCloudinary from "./../../components/get-Cloudinary/home.component";

const UploadImage = () => {
  return (
    <div>
      <Cloudinary />
      <GetCloudinary />
    </div>
  );
};

export default UploadImage;
