import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var fullname = ""

app.use(bodyParser.urlencoded({ extended: false }))

function bandName(req,res,next){
  console.log(req.body);
  fullname = req.body["street"] + req.body["pet"]
  next();
}
app.use(bandName)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");

});

app.post('/submit', (req, res) => {
  res.send(`<h1>Your band name is </h1> ${fullname}`)
 // res.sendFile(__dirname + "/public/res.html")
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
