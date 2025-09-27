let express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use( express.static( path.join(__dirname,"/public") ));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.listen( port, ()=>{
    console.log(`running on port ${port}`);
})
app.get( "/", (req, res) => {
    res.render("home.ejs");
})