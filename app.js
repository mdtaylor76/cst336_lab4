const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("index.html", {active: 'home'});
});

app.get("/mercury", function(req, res) {
     res.render("mercury.html", {active: 'mercury'});
});

app.get("/venus", function(req, res) {
     res.render("venus.html", {active: 'venus'});
});

app.get("/earth", function(req, res) {
     res.render("earth.html", {active: 'earth'});
});

app.get("/jupiter", function(req, res) {
     res.render("jupiter.html", {active: 'jupiter'});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Epxress server is running...");
});