var express = require("express"),
    app     = express();
    
    
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req,res) {
   res.render("index"); 
});

app.get("/services", function(req,res) {
    res.render("services");
});

app.get("*", function(req,res) {
    res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server as started!");
});