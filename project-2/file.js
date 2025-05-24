const fs= require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile('hello.txt', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading file');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
    fs.writeFile('myFile.txt','This is the new file I created', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully');
    });
    fs.appendFile('myFile.txt', 'hello.txt', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }
        console.log('File appended successfully');
    });
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
