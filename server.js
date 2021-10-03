// ejemplo creacion de servidor port 3000 sin módulo, sólo node

/*
const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hola Mundo desde Node en AWS (EC2)")
});

server.listen(3000);
console.log("Server on Port 3000");
*/

// ejemplo cracion servidor usando framework modelo express
// debe instalar el modelo con "npm i express"

const express = require("express");

const app = express();

app.get("/",(req,res)=>res.send("Hola Mundo desde Node con express en AWS (EC2)"));

app.listen(3000);
console.log("Server on Port 3000");