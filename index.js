const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Settar's DevOps Blog</h1>
    <p>CI/CD yoldadır...</p>
    <p>Version: 1.0</p>
  `);
});

app.listen(PORT, () => {
  console.log("Blog running...");
});
