//Step1: include mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Step2: create a collection using schema
//mongoose allows
//new Schema ({attributes in document},{name of collection})
let Product=new Schema({
    prodId:{type:Number},
    prodName:{type:String},
    price:{type:Number}
},{
    collection:'product'
});
//create table product
//to access your document create in mongo
module.exports=mongoose.model("Product",Product);