import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const hello = `VERSION 2: hello from ${os.hostname()}`;
  console.log(hello);
  res.send(hello);
});

app.listen(PORT, () => {
  console.log(`running at ${PORT}`);
});
