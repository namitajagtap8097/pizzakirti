//step 1: include all modules
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const path=require('path');
const apiProdRoute=require('./server/api-product.route');
const app=express();
//step 2: configuration of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("Database Connected"),
    (err)=>console.log("Failed to connect database")
);
//step 3:handling app static resourse and api call
app.use(bodyparser.json());//json handling
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,resp)=>{
    resp.sendFile("index.html");
});
// to call apiproduct route
app.use('/prod',apiProdRoute);
//step 4 :starting server
app.listen(4000,()=>{console.log("Server Listening at 4000")});