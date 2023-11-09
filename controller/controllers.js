const { Home, Fashion, Mobile, Watch, Electronics } = require("./contextData")


const HomeController=(req,res)=>{
  return res.send(Home)
}

const FashionController=(req,res)=>{
    return res.send(Fashion)
}

const MobileController=(req,res)=>{
    return res.send(Mobile)
}

const WatchController=(req,res)=>{
    return res.send(Watch)
}

const ElectronicsController=(req,res)=>{
    return res.send(Electronics)
}

module.exports={HomeController,FashionController,MobileController,WatchController,ElectronicsController}

