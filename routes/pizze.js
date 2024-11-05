import express from "express";

const router = express.Router();

const pizze = [
  { id: 1, naziv: "Margherita", cijena: 10 },
  { id: 2, naziv: "Diavola", cijena: 12 },
  { id: 3, naziv: "Capricciosa", cijena: 15 },
];

router.get("/", (req, res) => {
  res.json(pizze[id]);
});

router.get("/:id", (req, res) => {
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

// Ažurira cijeli resurs
router.put("/:id", (req, res) => {
  let id_pizza_req = req.params.id;
  let tijelo_zahtjeva = req.body;

  if (isNaN(id_pizza_req)) {
    return res.json({
      message: "Proslijedili ste parametar koji nije id broj!",
    });
  }

  let index = pizze.findIndex((pizza) => pizza.id == id_pizza_req);

  pizze[index] = tijelo_zahtjeva;
  console.log("pizze array", pizze);
  return res.json({
    message: "Ažurirano!",
    azurirani_podatak: tijelo_zahtjeva,
  });
});

// Ažurira samo dio resursa (npr. samo cijenu pizze)
router.patch("/:id", (req, res) => {
  let id_pizza_req = req.params.id;
  let tijelo_zahtjeva = req.body;

  if (isNaN(id_pizza_req)) {
    return res.json({
      message: "Proslijedili ste parametar koji nije id broj!",
    });
  }

  let index = pizze.findIndex((pizza) => pizza.id == id_pizza_req);

  // funkcija koja ažurira ključeve tijela kojeg smo proslijedili
  let kljucevi_objekta = Object.keys(tijelo_zahtjeva);
  console.log(kljucevi_objekta);

  for (let kljuc of kljucevi_objekta) {
    if (pizze[index][kljuc] != tijelo_zahtjeva[kljuc]) {
      pizze[index][kljuc] = tijelo_zahtjeva[kljuc];
    } else {
      pizze[index][kljuc] = pizze[index][kljuc];
    }
  }

  console.log("pizze array", pizze);
  return res.json({
    message: "Ažurirano!",
    azurirani_podatak: tijelo_zahtjeva,
  });
  console.log(pizze);
});

export default router;
