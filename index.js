const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
var bodyParser = require("body-parser");
const port = 3002;
app.use(cors());
app.use(express.json());
app.post("/update", (req, res) => writeToDisk(req.body, res));

app.listen(port, () => console.log("hi"));

function writeToDisk(data, res) {
  console.log("write to disk");
  fs.writeFileSync("./test.txt", JSON.stringify(data));
}

app.get("/data", (_req, res) => sendFromDisk(res));

function sendFromDisk(res) {
  console.log("send From Disk");
  let contents = fs.readFileSync("./test.txt");
  res.json(String(contents));
}
