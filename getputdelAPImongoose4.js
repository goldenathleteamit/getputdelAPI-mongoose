const express=require('express');
const app=express();
require('./config1');
const Product = require('./product2');

app.use(express.json());

//GET API WITH MONGOOSE

app.get('/list',async(req,res)=>{
    let data= await Product.find();
    res.send(data);
    console.log(data);
});

app.delete('/:id',async(req,res)=>{
    let data= await Product.deleteOne(req.params);
    console.log(req.params);
    res.send(data);
})

app.put('/:id',async(req,res)=>{
    let data= await Product.updateOne(
        req.params,
        {
            $set:req.body
    });
});

app.listen(5200);