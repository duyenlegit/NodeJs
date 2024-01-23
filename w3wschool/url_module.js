const http = require('http');
var fs = require('fs');
var url = require('url');

const port = process.env.PORT || 3000;
http.createServer(function (req, res) {

 /*   fs.rename('text1.txt', 'text1.html', function(err) {
        if (err) throw err;
        console.log('File Renamed!');
    })

    fs.appendFile('text2.txt', 'Hello Meo!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
    */
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(port);             
console.log('Meo server running at http://127.0.0.1:' + port);