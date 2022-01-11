var http = require("http");
var fs = require('fs');

var port = process.env.NODEJS_PORT || 8080;
var id = Math.floor(Math.random() * 100);

console.log(`Server will start at port: ${port}`);

http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile('./wwwroot/index.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html' });
            var webPage = data.toString().replace("{#ID}", "" + id);
            res.write(webPage);
            return res.end();
        });
    } else if (req.url == '/nodejs.png') {
        fs.readFile('./wwwroot/nodejs.png', function (err, data) {
            res.writeHead(200, { 'Content-type': 'image/png' });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(404);
        res.write('Not Found');
        res.end();
    }
}).listen(port);