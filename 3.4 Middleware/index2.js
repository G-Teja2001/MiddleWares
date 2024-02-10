import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;
app.use(morgan('combined')); // It is a morgan middle ware it gives the log details when we call the get request 
app.get("/", (req, res) => {
  res.send("Hello");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
