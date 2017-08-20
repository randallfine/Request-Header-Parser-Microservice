const express = require("express");
const useragent = require('useragent');
const locale = require("locale");
const app = express();


app.get("/", (req, res) =>{
    let agent = useragent.lookup(req.headers['user-agent']);
    let ua = {ip: "", language: locale.Locale.default.normalized, browser: `${agent.family} ${agent.major}`, OS: agent.os.family};

    if(req.ip.substr(0, 7) == "::ffff:"){
        ua.ip = req.ip.substr(7);
    } else {
        ua.ip = req.ip
    }

    res.send(ua);
});

app.listen(process.env.PORT || 3000, () => console.log("app is go!!"))