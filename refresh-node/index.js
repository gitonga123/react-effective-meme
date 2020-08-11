const http = require('http')
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';

const port = 3000;

const server = http.createServer((request, response)  => {
    
    response.setHeader('Content-Type', 'text/html')
    var fileUrl = '/index.html';
    let baseFilePath = path.resolve('./public')
    if (request.url == "/") {
        let filePath = baseFilePath+fileUrl;
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    filePath = baseFilePath + "/404.html";
                    response.statusCode = 404;
                    fs.createReadStream(filePath).pipe(response)
                    return;
                }
                fs.createReadStream(filePath).pipe(response)
            });
        } else {
            filePath = baseFilePath + "/404.html";
            response.statusCode = 404;
            fs.createReadStream(filePath).pipe(response)
            return;
        }
    } else {
        fileUrl = 'about.html'
        let filePath = baseFilePath + fileUrl;
        const fileExtension = path.extname(filePath);
        if (fileExtension == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    filePath = baseFilePath + "/404.html";
                    response.statusCode = 404;
                    fs.createReadStream(filePath).pipe(response)
                    return;
                }
                fs.createReadStream(filePath).pipe(response)
            });
        } else {
            filePath = baseFilePath + "/404.html";
            response.statusCode = 404;
            fs.createReadStream(filePath).pipe(response)
            return;
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
