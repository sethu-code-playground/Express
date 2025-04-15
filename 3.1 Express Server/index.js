import express from "express"; //import express object from express module.

const app = express(); //create a new variable and assign it to express object
const port = 3000;

/*listens on the port mentioned(3000), a port is a loaction on the server where it will listen for requests from
client side and a callback will be trigerred when the server is set up.*/
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});

app.get("/", (req,res)=>{
    res.send("Hello World");
});
