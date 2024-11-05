import express from "express";

const router = express.Router();

// Metoda za naručivanje pizze
router.post("/narudzbe", (req, res) => {
  let body_pizza = req.body;
  console.log(body_pizza);
  keys = ["pizza", "velicina", "kolicina"];
  for (let pizza in body_pizza) {
    console.log(pizza);
  }
  return res.json("Narucili ste pizze");
});

export default router;
