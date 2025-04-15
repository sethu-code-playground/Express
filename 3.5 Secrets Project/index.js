//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path"
import {fileURLToPath} from "url";

const app = express();
const port = 4040;

var directoryName = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    // console.log(req.body);
    // console.log(directoryName);
    res.sendFile(`${directoryName}/public/index.html`);
    // res.send("<h1>Working!</h1>");

})

app.post('/check', (req,res)=>{
    // console.log(req.body);
    if(req.body.password === "RoronoaZoro"){
        res.sendFile(`${directoryName}/public/secret.html`);
    }else{
        res.sendFile(`${directoryName}/public/index.html`);
    }
    
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})