import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser  from "body-parser"; // body passer is as middle ware to pass infomation that comes from the user   
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));  // this line used to pass the user input data and we get in the post method 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res) => {
  console.log(req.body)   // after pressing submit button or calling this post method in the consle give name and email will be printed as key and values format
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
