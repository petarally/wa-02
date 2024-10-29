const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

const pizze = [
  { id: 1, naziv: "Margherita", cijena: 10 },
  { id: 2, naziv: "Diavola", cijena: 12 },
  { id: 3, naziv: "Capricciosa", cijena: 15 },
];

app.get("/pizze", (req, res) => {
  res.json(pizze[id]);
});

app.get("/pizze/:id", (req, res) => {
  let id_pizza = req.params.id;
  if (isNaN(id_pizza)) {
    res.send("Id mora biti broj");
  }
  if (id_pizza > pizze.length) {
    res.send("Nepostojeca pizza");
  }
  let pizza = pizze.find((p) => p.id == id_pizza);
  res.json(pizza);
  // res.json(pizze[id_pizza - 1]);
});

// Metoda za naručivanje pizze
app.post("/naruci", (req, res) => {
  let body_pizza = req.body;
  console.log(body_pizza);
  keys = ["pizza", "velicina", "kolicina"];
  for (let pizza in body_pizza) {
    console.log(pizza);
  }
  return res.json("Narucili ste pizze");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
