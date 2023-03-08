const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const chooseVehiclesInfo = require("./data/chooseVehiclesInfo");
const vehiclesDetailsInfo = require("./data/vehiclesDetailsInfo.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("safe ride server is running");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

app.get("/chooseVehicles", (req, res) => {
  res.send(chooseVehiclesInfo);
});

app.get("/vehicles-details-info/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedInfo = vehiclesDetailsInfo.find((tdi) => tdi.id === id);
  res.send(selectedInfo);
});
