const express=require("express")
const bp=require("body-parser")
const app=express()
app.use(bp.urlencoded({extended:true}))
app.use(express.static("view"))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    const name=(req.body.t1)
    console.log(name)
})

app.listen(3000,function(req,res){
    console.log("server has started at port 3000")
})