const multer= require("multer");    //form data middleware configuration
// const uploader= multer({
//     dest:"./public"
// })
 const myStorage= multer.diskStorage({
    destination:(req,file,cb)=>{ //destinastion configuration
   cb(null,"./public")
    },
    filename:(req,file,cb)=>{
  cb(null, file.originalname)
    }
 });
  const uploader=( filetype='image')=>{
    let allowedExts=[];
    if(filetype==='doc'){
      allowedExts= ['.TIFF','.PSD','.PDF' ,'.EPS', '.AI','.RAW' ]
    } else{
      allowedExts=['jpeg','jpg','png','gif']
    }
    return multer({
        storage:myStorage,
        fileFilter:(req,file,cb)=>{
     const ext = file.originalname.split('.').pop();
     if (allowedExts.includes(ext.toLowerCase())){
        //allowed
        cb(null,true);
     } 
     else{
        //file not  supported
        cb ({ code:400, message:"file format not supported", statusCode:"Validation_error"})
     }
    
     },
     limits:{
      fileSize:3000000
        }
    })
  }

  

module.exports={
    uploader
}

//file filter  and third party service