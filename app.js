const express = require("express");
const app = express();
const total = (precio, cant, desc) =>
precio * cant * (1 - desc);
app.get("/calcular", (req, res) => {
    const resultado = Number(req.query.a) + Number(req.query.b);
    res.json({ resultado });
  });
app.get("/calcular", (req, res) => {
    res.json({ resultado: eval(req.query.expr) });
  });
  
  module.exports = { app, total };
module.exports = { app, total };