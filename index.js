const express=require('express')
const route=require('./route/route')
const cors=require('cors')
const contextData=require('./controller/contextData')
const app=express();
app.use(cors({
    origin:"*"
}))

// app.use("/api",route)

app.get("/api/ecommdata",(req,res)=>{
    res.send(contextData)
})

app.listen(8001,()=>{
    try{
        console.log("server is live 8001 port number")
    }
    catch(err){
        console.log(err,"error occurred")
    }
})