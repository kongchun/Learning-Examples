//需要以管理员权限启动 编辑器
//使用 alt+r 运行当然node程序
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\nkongchun');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
