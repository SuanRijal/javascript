const bodyValidator=(schema)=>{
    return async(req,res,next)=>{
        try{
            const data= req.body;
            await schema.validateAsync(data,{abortEarly:false})
            
        } catch(exception){
            let detail={};
            exception.details.map((errorField)=>{
                detail[errorFiled.context.label]= errorField.message;
            })
            next({
                code:400,
                message:"validation Error",
                statusCode:"validation_failed",
                detail:detail

            })
        }
        
                                                            //this fun returns promise so await is required
    }
}
module.exports = {bodyValidator}