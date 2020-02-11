const http = require("http");
const router = require("./handler")
const port = 3000;
const server = http.createServer(router);

server.listen(port, () => {
  console.log(
    `Server is listening on port.  Ready to accept requests!`
    );
  });