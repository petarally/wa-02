import express from "express";
import pizzeRouter from "./routes/pizze.js";
import narudzbeRouter from "./routes/narudzbe.js";

const app = express();

app.use(express.json());
app.use("/pizze", pizzeRouter);
app.use("/narudzbe", narudzbeRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
