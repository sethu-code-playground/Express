import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

/*Using morgan dependency as a middleware to log the requests. Below is the sample output for get request in postman & chrome
 ::1 - - [15/Mar/2025:13:45:56 +0000] "GET / HTTP/1.1" 200 5 "-" "PostmanRuntime/7.43.0"
 ::1 - - [15/Mar/2025:13:47:54 +0000] "GET / HTTP/1.1" 200 5 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"*/
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
