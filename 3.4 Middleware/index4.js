import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const directoryname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({extended:true}));

//app.use(express.urlencoded({ extended: true })); we can use this after expressv4.16 and above no need for body parser


app.get('/', (req, res) =>{
  // res.send("Welcome to the homepage");
  res.sendFile(directoryname + "/public/index.html");
});

app.post("/submit", (req,res) => { //the manipulations of the request is done in middleware in solution
  console.log(req.body);
  console.log(req.body.street);
  console.log(req.body.pet);
  var combinedName = req.body.street + req.body.pet;
  res.send(`<h1>Your band name is:</h1><br><h2>${combinedName}✌️</h2>`);
  // res.send(`Requestbody ${combinedName}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
