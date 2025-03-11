const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Node js");
})

app.listen(404);