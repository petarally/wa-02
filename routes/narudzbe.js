import express from "express";

const router = express.Router();

let narudzbe = [];

// Metoda za naručivanje pizze
router.post("/", (req, res) => {
  let body_pizza = req.body;
  console.log(body_pizza);
  keys = ["pizza", "velicina", "kolicina"];
  for (let pizza in body_pizza) {
    console.log(pizza);
  }
  narudzbe.push(res);
  return res.json("Narucili ste pizze");
});

router.get("/:id", (req, res) => {
  let id_naruzba = req.params.id;
  if (isNaN(id_naruzba)) {
    res.send("Id mora biti broj");
  }
  if (id_naruzba > narudzbe.length) {
    res.status(404).send("Nepostojeca narudzba");
  }
  let narudzba = narudzbe.find((p) => p.id == id_naruzba);
  res.status(200).json(narudzba);
  // res.json(pizze[id_pizza - 1]);
});

export default router;
