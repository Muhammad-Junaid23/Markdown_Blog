const express = require("express");
const mongoose = require('mongoose')
const Article = require('./models/article')
const articlesRouter = require('./routes/articlesRoute')
const methodOverride = require('method-override')
require('dotenv').config()
const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

app.get('/', async (req,res)=>{
  const articles = await Article.find().sort({createdAt:'desc'})
  res.render("articles/index",{articles : articles});
})

app.use('/articles',articlesRouter)

const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to Atlas ...');
    app.listen(404,()=>{
        console.log('Server Running at Port 404');
     })
}
).catch((e)=> console.log('Connection Failed!',e));