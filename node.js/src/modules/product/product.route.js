const productrouter = require('express').Router();
const {checkLogin} = require('../../middleware/auth.middleware');
const productCtrl = require('../product/product.controller');
const {uploader}= require("../../middleware/multipart.middleware")
const{bodyValidator}= require("../../middleware/validater.middleware")// file path of bodyvalidator
const {productAddDTO} =require("./product.validator")
 //uploader.none()form data but file not uploades
 //single() one file can be uploaded at a time
 productrouter.route('/')
  .post(checkLogin,uploader().single('image'), bodyValidator(productAddDTO),productCtrl.addProduct) //uploader.array("image")
  .get(productCtrl.getProductList)

  productrouter.route("/:id")
  .get(checkLogin, productCtrl.productDetailById)
  .patch(checkLogin, productCtrl.updateProductById)
  .delete(checkLogin, productCtrl.deleteProductById)
  module.exports = productrouter;

  //file mapping
  