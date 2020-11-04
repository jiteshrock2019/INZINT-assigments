const express = require("express");
const app = express();


app.get('/dateFormat', (req, res) =>{

    res.setHeader('Content-Type', 'text/html');
    
    let currrentDate = new Date();
    let hours = currrentDate.getHours();
    let minutes = currrentDate.getMinutes();

    // adjust 0 before single digit date
    let date = ("0" + currrentDate.getDate()).slice(-2);
    
    
    let month = ("0" + (currrentDate.getMonth() + 1)).slice(-2);
    
    let year = currrentDate.getFullYear();
    
    let seconds = currrentDate.getSeconds();
    res.write("<h1 style='margin-bottom: 25px'> The Date format of today as follows:- <br>");
    res.write("<h1 style='color: blue; text-align: center'>Today's full date format is =>  "+year + "-" + month + "-" + date + " , " + hours + ":" + minutes + ":" + seconds+ "</h1>");
    res.write("<h1 style='color: tomato; text-align: center'> The current Date is => "+year + "-" + month + "-" + date+ "</h1>"); 
    res.write("<h1 style='color: #070d59; text-align: center'> The current time is => "+ hours + ":" + minutes+ "</h1>");

    res.end();
});

app.listen(8000, () =>{
    console.log("API live from port no 8000");
})