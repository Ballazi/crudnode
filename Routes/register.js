const express = require("express");
const router = express.Router();
const users = require("../modal/users");

router.post("/",(req,res)=>
{
    const name = req.body.name;
    const user = req.body.username;
    const pass = req.body.password;
    const obj = {
        name : name,
        user : user,
        password : pass
    };
    if(name !== undefined && user !== undefined && pass !== undefined)
    {
        users.push(obj);
        res.status(200).json({message:"success",status:200,data:"Register success"});
    }
    else
    {
        res.status(403).json({message:"failed",status:403,data:"Bad Request"});
    }
})

module.exports = router;