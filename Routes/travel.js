const express = require("express");
const preKey = require("../constants");
const router = express.Router();
const Arrayofblog = require("../modal/ArraryOfBlogs");
const varifyToken = require("../middleware/verifyToken");

router.post("/", varifyToken ,(req,res)=>
{
    const category = req.body.category;
    const arr = Arrayofblog.filter((elem)=> elem.category === category);
    const {authorization} = req.headers;
    const [, token] = authorization.split(" ");
    res.status(200).json({message:"success",status:200,data:{token, arr , userName:req.auth.name}});
})


module.exports = router;