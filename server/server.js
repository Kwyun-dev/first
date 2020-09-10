var express = require('express'); //
var app = express();
var getJudgeList = require('./getJudgeList');

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, x-sso-token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Credentials", true);

    if(req.method == 'OPTIONS') {
        res.send(200);
    }else {
        next();
    }
})

app.get('/commonLpt/getJudgeList', (req, res) => {
    var result = {
        msg: "成功",
        code: 0,
        data: getJudgeList
    };
    res.send(result);
});

app.listen(8899, () => {
    console.log('Example app listening on port 8899!');
})