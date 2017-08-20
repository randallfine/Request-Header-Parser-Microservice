const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    console.log(ip)

});

app.listen(3000, () => console.log("app is go!!"))