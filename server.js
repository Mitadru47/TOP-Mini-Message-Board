const http = require("http");
const app = require("./app.js");

const server = http.createServer(app);

const hostname = "0.0.0.0";
const port = 3000;

server.listen(port, hostname, () => {
    console.log("Server Active!\nListening on port " + port + "...\n");
});