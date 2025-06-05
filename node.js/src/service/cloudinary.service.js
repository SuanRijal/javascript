require("dotenv").config(); //reads the env file content
const cloudinary = require("cloudinary").v2;
const fs = require('fs');

cloudinary.config({ //server connection
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // corrected typo here
});

class CloudinaryService {
    uploadImage = async (filepath, dr = '/') => {
        try {
            const uploadContent= await cloudinary.uploader.upload(file.path,{
                folder:'/node.js/product',
                unique_fiename:true,
                resource_type:"auto"
              })
              fs.unlinksync(file.path)
        }
         catch (error) {
            console.error(error);
        }
    }
}
  const cloudinarysvc =new CloudinaryService();
  module.exports= {
    cloudinarysvc
}