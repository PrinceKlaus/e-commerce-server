const {HomeController,FashionController,MobileController,WatchController,ElectronicsController}=require('../controller/controllers')

const route=require('express').Router()
route.get("/home",HomeController)
route.get("/fashion",FashionController)
route.get("/mobile",MobileController)
route.get("/watch",WatchController)
route.get("/electronics",ElectronicsController)

module.exports=route;