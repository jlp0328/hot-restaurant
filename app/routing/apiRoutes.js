var path = require("path");

module.exports = function(app) {

app.post("/api/new", function(req, res) {
  var newreservation = req.body;
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  tableArray.push(newreservation);

  res.json(newreservation);
});

}