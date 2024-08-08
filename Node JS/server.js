import http from 'http';

let port = 5000;

let server = http.createServer(serverListener);

server.listen(port, () => {
    console.log(`Server is running ot port ${port}`);
});

function serverListener(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.write('<h1>Hello From Server!</h1>');
    res.end();
}