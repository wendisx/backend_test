const express = require('express');

const app=express();

app.post('/',(req,res)=>{
    res.send("this is backend program");
});

app.listen(5000,()=>{
    console.log("the server is running on port 5000");
});