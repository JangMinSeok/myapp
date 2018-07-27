/**
 * Created by Genesis on 2018-07-24.
 */
var express = require('express')
    , http = require('http')
    , path = require('path');
var app = express();

var bodyParser = require('body-parser')
    , static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 30000 )
http.createServer(app).listen( app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port') );
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/public',static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    console.log('첫 번재 미들웨어에서 요청을 처리함.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과 입니다</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>' );
    res.end();
});

//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});
//
//app.listen(3000, function () {
//    console.log('Example app listening on port 3000!');
//});

