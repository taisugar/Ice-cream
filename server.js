var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
server.listen(process.env.PORT || 3000);

app.get("/", function(req, res){
	res.render("index");
});
