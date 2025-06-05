const http= require ("http") // server instance  nodemon is globally setup so that it will listen to index.js and ensure auto resatart.
//import server side application
const application =require("./src/config/express.config")
const httpserver=http.createServer(application)
// protocol http=80 https=443
const PORT=9005;
const HOST='127.0.0.1';


// 127.0.0.1/ localhost/ ::1
httpserver.listen(PORT,HOST, (err)=>{
    if(!err){
        console.log("server is running on port:",PORT);
        console.log("press cntrl+c to disconnect your server:");
    }
})