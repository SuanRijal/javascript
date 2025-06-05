const joi=require("joi")
const productAddDTO =({
name:joi.string().min(3).max(100).required(),  //validation rules
price:joi.number().min(100).required(),
brand:joi.string().empty(null,'').default(null),
catagory:joi.string().empty(null,'').required()
});
module.exports={
    productAddDTO
}