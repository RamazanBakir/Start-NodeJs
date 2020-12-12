const { createSecretKey } = require('crypto');
const http = require('http');
const hostname = 'localhost';
const port =3000;
const server = http.createServer((req,res) => {
    console.log(req.headers);
    res.statusCode = 200; //OK
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hi, Congrats. </h1></body></html>');
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
//Sonrasında console'a gittiğinizde incoming request header görecegiz.