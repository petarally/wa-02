const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

const pizze = [
  { naziv: "Margherita", cijena: 10 },
  { naziv: "Diavola", cijena: 12 },
  { naziv: "Capricciosa", cijena: 15 },
];

app.get("/pizze", (req, res) => {
  res.json(pizze);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
