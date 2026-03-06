import http from 'http';
const PORT = process.env.PORT;


const server = http.createServer(async (req, res) => {
    try {
        // Check if GET req
        if (req.method == 'GET'){
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end('<h>Homepage</h>');
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end('<h>About Us</h>');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html'});
                res.end('<h>Not Found</h>');
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
         res.writeHead(500, { 'Content-Type': 'text/plain'});
        res.end('Server Error')
    }

    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})