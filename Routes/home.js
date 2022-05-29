const express = require("express");
const preKey = require("../constants");
const router = express.Router();
const Arrayofblog = require("../modal/ArraryOfBlogs");
const varifyToken = require("../middleware/verifyToken");

router.get("/", varifyToken ,(req,res)=>
{
    const arr = Arrayofblog.slice(0,10);
    const {authorization} = req.headers;
    const [, token] = authorization.split(" ");
    res.status(200).json({message:"success",status:200,data:{token, arr , userName:req.auth.name}});
})


module.exports = router;