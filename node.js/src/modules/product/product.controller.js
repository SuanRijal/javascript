 
 const  {cloudinarysvc} = require("../../service/cloudinary.service");
 class productController {
    addProduct= async (req, res, next)=> {
   
      const data= req.body || null; //data is received by this
      const file = req.file || null; 
      if (file){ 
        data.image= await cloudinarysvc.uploadImage(file.path,'/product')
      }        
     
      // file uploadation
      
       res.json({
        data:{data},
        message: "Product Created",
        code: "SUCCESS",
        options: null
      });
    }
  
    getProductList(req, res, next) {
      res.json({
        data: null,
        message: "Product list",
        code: "SUCCESS",
        options: null
      });
    }
  
    productDetailById(req, res, next) {
      res.json({
        data: null,
        message: "Product detail",
        code: "SUCCESS",
        options: null
      });
    }
  
    updateProductById(req, res, next) {
      res.json({
        data: null,
        message: "Product updated",
        code: "SUCCESS",
        options: null
      });
    }
  
    deleteProductById(req, res) {
      res.json({
        data: null,
        message: "Product deleted",
        code: "SUCCESS",
        options: null
      });
    }
  }
  
  const productCtrl = new productController();
  // Export the class (optional)
  module.exports = productCtrl;
  