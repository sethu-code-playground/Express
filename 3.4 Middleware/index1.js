import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Mounting the middleware to app and using urlencoded to create a body for url-encoded requests(like form submission)
//use gets called before any of the route handlers
app.use(bodyParser.urlencoded({extended:true})); 

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html"); //sends index.html file as response
});

app.post('/submit', (req, res)=>{
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
