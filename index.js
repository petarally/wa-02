const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, ime: "Petar", prezime: "Petrovic" },
    { id: 2, ime: "Marko", prezime: "Markovic" },
    { id: 3, ime: "Ivan", prezime: "Ivanovic" },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
