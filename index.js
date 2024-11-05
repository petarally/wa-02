import express from "express";
import pizzeRouter from "./routes/pizze";

const app = express();

app.use(express.json());
app.use(pizzeRouter);
app.use("/pizze");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
