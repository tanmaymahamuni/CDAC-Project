var exp=require("express")
var app=exp()
var mysql=require("mysql2")
var bp=require("body-parser")
var cors=require("cors")
app.listen(9000,function(){console.log("server started")})

app.get('/hi',function(req,res){
    res.write("<h1>Hello</h1>")
})