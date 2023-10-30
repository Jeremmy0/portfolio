const express = require("express");
const bp = require("body-parser");
const app = express();


app.use(bp.urlencoded({extended : true}));
app.use(express.static("public"));
// process.on('warning', e => console.warn(e.stack));


app.listen(3000, function(){
    console.log("server started successfully ")
});

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html");
 

});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

})