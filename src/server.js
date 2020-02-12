const http = require('http');
const router = require('./handler');

const port = 3000;
const server = http.createServer(router);

server.listen(port, () => {
  console.log(
    `Server is running at http://localhost:${port}  Ready to accept requests!`,
  );
});
