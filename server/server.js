const express = require("express");
const server = express();
const port = 3308;

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(cors());

server.use("/api/v1/users", userRoutes);

server.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

server.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
