const application=require("express").Router();
const productrouter = require('../modules/product/product.route')
// const express = require("express"); //loading express application
// const application=express.Router();

application.use('/product', productrouter)

module.exports=application;    //exporting router.js 
