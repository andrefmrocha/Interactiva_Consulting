var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    nodemailer  = require("nodemailer"),
    path        = require("path");
    
    
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
   res.sendFile(path.join(__dirname+'/index.html')); 
});

app.get("/services", function(req,res) {
    res.sendFile(path.join(__dirname+'/services.html'));
});

app.post("/email", function(req, res) {
            var receiverEmail = "yelp.camp.mailer.123@gmail.com";
            var receiverEmailPass = "yelp.camp";
            var emailMsg = "Nome: " + req.body.name + "\nEmail: " + req.body.email + "\nTelemóvel: " + req.body.phone + "\n\nMensagem: " + req.body.message;
            
            var smtpTransport = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: receiverEmail,
                    pass: receiverEmailPass
                }
            });
            var mailOptions = {
                to: receiverEmail,
                from: receiverEmail,
                subject: "Website Form Contact",
                text: emailMsg
            };
            smtpTransport.sendMail(mailOptions);
            res.redirect("/");
    });

app.get("*", function(req,res) {
    res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server as started!");
});