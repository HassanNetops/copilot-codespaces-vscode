// Create web server that listens on port 3000
// When you visit http://localhost:3000/ in your browser, the server should respond with the contents of the comments.json file
// If you visit any other path, the server should respond with a 404 status code and the message "Not found"
// If the comments.json file does not exist, the server should respond with a 500 status code and the message "Internal Server Error"
// If the server encounters any other error, it should respond with a 500 status code and the error message

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});