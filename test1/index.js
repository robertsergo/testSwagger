var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000, function(){
    console.log("le server est écourté sur le port 3000");
}
);


app.get("/", function(req, res){
    res.sendFile(__dirname  + "/views/home.html")
}
    
);
