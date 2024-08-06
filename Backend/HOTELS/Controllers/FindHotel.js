module.exports = (req,res)=>{

    let {Name} = req.body
    console.log(Name);
    

    res.send("hotel finded!")

}



