const express = require("express"); //loading express application
const router=require('../router/router')

const application=express();
//body parsers
application.use(express.json());// parsers for json type
application.use(express.urlencoded({  //for url encoded
    extended:false
}))
application.use(router); //routing export.js to express.config.js
// routing



//request and response method and response status
//response.send
//response.end
//response.render
//response.json  response should always be in json formatt
//response
//response
//response
//response


//example of routing in express



//404 routing if the api doesnot exist then this will response to non existance api call

//postman application along with routing


// 404 routing
application.use((request, response, next) => {
    next({
        code: 404,
        message: "NoT found",
        statusCode: "Not_found"
    })
    // response.status(404).json({
    //     data: null,
    //     message: "NoT found",
    //     code: "Not_found",
    //     options: null
    // })
})

// error handling middleware
application.use((error, req, res, next) => {
    let status = error.code || 500;
    let message = error.message || 'Internal Server Error...';
    let code = error.statusCode || "SERVER_ERROR";
    let data = error.detail || null;
    
    res.status(404).json({
        data: data,
        message: message,
        code: code,
        options: null
    })
})

module.exports=application;