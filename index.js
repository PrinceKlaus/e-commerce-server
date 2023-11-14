const express=require('express')
const route=require('./route/route')
const cors=require("cors")
const app=express();
app.use(cors({
    origin:"*"
}))

// app.use("/api",route)

app.use("/api",route)

app.listen(8001,()=>{
    try{
        console.log("server is live 8001 port number")
    }
    catch(err){
        console.log(err,"error occurred")
    }
})