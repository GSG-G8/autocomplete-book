const http = require("http");

const port = 3000;
const server = http.createServer();

server.listen(port, () => {
  console.log(
    `Server is listening on port.  Ready to accept requests!`
    );
  });