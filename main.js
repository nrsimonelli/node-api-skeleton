const express = require("express");
const app = express();
const port = 80;

const SENSOR_LIST = [
  { id: 1, uid: "AXQ45J", name: "Office" },
  { id: 2, uid: "59V5H9", name: "Kitchen" },
  { id: 3, uid: "ER3TG4", name: "Garage" },
  { id: 4, uid: "1LK9NJ", name: "Bedroom" },
  { id: 5, uid: "VV8XCQ", name: "Backyard" },
  { id: 6, uid: "D345T7", name: "Familyroom" },
];

const USER = [{ id: 1, username: "user_1", gatewayid: 1 }];

const SENSOR_DATA = [
  { id: 1, sensor_id: 1, rssi: 35, bat: 88.5, temp: 70.1 },
  { id: 2, sensor_id: 2, rssi: 66, bat: 76.2, temp: 70.4 },
  { id: 3, sensor_id: 3, rssi: 90, bat: 99.8, temp: 71.0 },
  { id: 4, sensor_id: 4, rssi: 78, bat: 39.9, temp: 70.6 },
  { id: 5, sensor_id: 5, rssi: 112, bat: 63.1, temp: 69.9 },
  { id: 6, sensor_id: 6, rssi: 42, bat: 45.5, temp: 70.8 },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sensor", (req, res) => {
  res.send("Sensor List Incoming");
});

app.get("/user", (req, res) => {
  res.send("user token incoming");
});

app.get("/sensor/:id", (req, res) => {
  res.send("Sensor data incoming");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
