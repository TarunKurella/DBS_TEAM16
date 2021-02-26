const jwt = require('jsonwebtoken');

module.exports= (req,resp,next)=>{
    try{
        let tokenwithbearer = req.headers["authorization"];
        let tokenwithoutbearer = tokenwithbearer.split(" ")[1];

        jwt.verify(tokenwithoutbearer,"jahnavi",(err,result)=>{
            if(result)
            {

                next();
            }
            else
            {
              console.log("not authorized");
                resp.json({message:"You are not authorized, Login again"});
            }
        })
    }
    catch(error)
    {
        resp.json({message:"You are not authorized, Login again"});
    }
}
