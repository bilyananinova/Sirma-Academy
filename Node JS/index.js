import http from 'http';
import fs from 'fs/promises';

let port = 8000;

let server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is running on ${port}...`);
});

function requestListener(req, res) {
    fs.readFile('./index.html')
        .then(data => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            console.log(data);
            res.write(data);
            res.end();
        })
        .catch(err => {
            res.writeHead(404);
            console.error(err);
            res.end();
        })
}

