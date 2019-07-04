//api-employee.route.js
const express=require('express');
const app=express()
//we are creating api Link for product
const apiProdRouter=express.Router();
//we are importing product schema
let Product=require('./product');
//get all product
apiProdRouter.route('/allProd').get((req,resp)=>{
    Product.find((err,data)=>{
        if(err){
            resp.send("Failure");
        }
        console.log("fetching");
        resp.send(data);
    });
});
//get product by prodId
apiProdRouter.route('/:prodId').get((req,resp)=>{
    let p_prodId=req.params.prodId;
    Product.find({prodId:p_prodId},(err,data)=>{
        if(err) resp.send("Failed to load data for:"+p_prodId);
    });
});
//get product by prodName
apiProdRouter.route('/pname/:prodName').get((req,resp)=>{
    let p_prodName=req.params.prodName;
    Product.find({prodName:p_prodName},(err,data)=>{
        if(err) resp.send("Failed to load data for:"+p_prodName);
        resp.send(data);
    });
});
//add product
apiProdRouter.route('/addProd').post((req,resp)=>{
    let body_product=new Product(req.body);
     body_product.save().then(
         ()=>resp.send("New Product added to database"),
         (err)=>resp.send("Failure while adding product details!")
     );
});
//delete product
apiProdRouter.route('/delete/:prodId').delete((req,resp)=>{
    let p_prodId=req.params.prodId;
    Product.findOneAndDelete({prodId:p_prodId},(err,data)=>{
    if(err) resp.send("No records found");
    resp.send(data+"deleted records");
   });
});
//update product
apiProdRouter.route('/update/:prodId/:price').put((req,resp)=>{
    let p_prodId=req.params.prodId;
    let p_price=req.params.price;
   Product.findOneAndUpdate({prodId:p_prodId},{price:p_price},(err,data)=>{
       if(err) resp.send("Failed to update");
       resp.send("Update records for "+p_prodId+" as "+p_price);
   });
});
module.exports=apiProdRouter;