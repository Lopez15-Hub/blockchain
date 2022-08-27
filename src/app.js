import express from "express";
// import './index';
const app = express();
app.get("/",(req,res)=>{
    res.json({
        "message":"hello world"
    });
})

app.listen(4000,()=> console.log("Server is running on port 4000"));
