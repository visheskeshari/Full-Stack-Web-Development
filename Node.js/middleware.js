module.exports= reqFilter=(req, resp, next)=>{
    if (!req.query.age){
        resp.send("Enter the age")
    }
    else if (req.query.age<18){
        resp.send("You can not acsess the web page")
    }
    else{
        next();
    }
    // console.log('reqFilter');
    
}