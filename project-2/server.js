const http = require('http');

const PORT =3000;
const server = http.createServer((req,res)=>{
    res.write('<h1>Hello World</h1>\n<h2>This is the simple Node.js Server</h2>');
    res.end();
});
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
});