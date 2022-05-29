const express = require("express");
const app = express();
const cors = require("cors");
const loginRouter = require("./Routes/login");
const homeRouter = require("./Routes/home");
const bollywoodRouter = require("./Routes/bollywood");
const hollywoodRouter = require("./Routes/hollywood");
const foodRouter = require("./Routes/food");
const travelRouter = require("./Routes/travel");
const technologyRouter = require("./Routes/technology");
const registerRouter = require("./Routes/register");
app.use(cors());
app.use(express.json());

// app.get("/api/v1/login/", (req, res) => {
//     console.log(req);
//     const user = req.body.username;
//     const pass = req.body.password;

//     const obje = users.find((elem) => elem.user === user && elem.password === pass);

//     if (obje === undefined) {
//         res.status(400).json({ message: "username and password not matched", data: "Invalid Credential" });
//     }
//     else
//     {
//         res.status(200).json({message:"username and password matched",data:user});
//     }
// })

app.use("/api/v1/login",loginRouter);

app.use("/",homeRouter);

app.use("/api/v1/bollywood",bollywoodRouter);

app.use("/api/v1/hollywood",hollywoodRouter);

app.use("/api/v1/food",foodRouter);

app.use("/api/v1/travel",travelRouter);

app.use("/api/v1/technology",technologyRouter);

app.use("/api/v1/register",registerRouter);




module.exports = app;