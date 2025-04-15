import express from "express";
const app = express();
const port = 3000;


/*GET request is made when the end point / is hit and the callback will do the tasks specified after the
endpoint is hit. The 1st paramater of the callback should be request(req) and the 2nd paramater of the 
callback should be response(res) */
app.get("/", (req, res) => {
  console.log(req.rawHeaders); //print all detils related to the requests
  console.log(res);
  res.send("<h1>Hello! This is the Homepage</h1>"); // sends the response back to the client side
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Sethu</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +918825452561</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
