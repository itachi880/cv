const Express = require("express");
const server = Express();
const fs = require("fs");
const cors = require("cors");
server.use(cors());
server.get("/:name", (req, res) => {
  res.sendFile(__dirname + "/" + req.params.name);
});
server.listen(3001);
