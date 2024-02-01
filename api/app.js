require("dotenv").config()
const express = require('express');
const MongoDB_Connection = require("./server/config/db/MongoDB");
const app = express()

const body_parser = require('body-parser')
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan')

const port = process.env.PORT || 1111;

MongoDB_Connection();

app.use(morgan("dev"))
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['*'],
}))

const AuthRoute = require('./server/routes/AuthRoute')
const UserRoute = require('./server/routes/UserRoute')

app.use("/auth", AuthRoute)
app.use("/user", UserRoute)

app.get("/", (req, res) => {
    res.send("RADII")
})

app.listen(port, () => {
    console.log('http://localhost:'+port)
})