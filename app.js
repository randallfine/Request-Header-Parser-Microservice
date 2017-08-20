const express = require("express");
const useragent = require('useragent');
const locale = require("locale");
const app = express();


app.get("/", (req, res) =>{
    let agent = useragent.lookup(req.headers['user-agent']);
    let ua = {ip: req.ip, language: locale.Locale.default.normalized, browser: `${agent.family} ${agent.major}`, OS: agent.os.family};

    res.send(ua);
});

app.listen(precess.env.PORT || 3000, () => console.log("app is go!!"))