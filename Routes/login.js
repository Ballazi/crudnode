const express = require("express");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const router = express.Router();
const users = require("../modal/users");
const preKey = require("../constants");

const jwtConfig = { expiresIn: "30min" };


router.post("/", (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    const obj = users.find(elem => elem.user === user && elem.password === pass);
    if (obj === undefined) {
        res.status(400).json({ message: "Failed",status:400, data: "Invalid username or password" });
    }

    try {
        const payload = { "name":obj.name,"type" : obj.type  };
        const token = sign(payload, preKey, jwtConfig);
        const tokens = `Bearer ${token}`
        res.status(200).json({ message: "success", status:200,data: {tokens} });
    } catch (error) {
        res.status(500).json({message:"failed", status:500,data:error})
    }
})


module.exports = router;
