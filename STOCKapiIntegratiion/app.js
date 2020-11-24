const request = require('request');
const dotenv = require('dotenv').config();

const url = `http://mboum.com/api/v1/ga/topgainers/?start=1&apikey=${process.env.API_KEY}`;

request(url, (error, response, body) =>{
    const data = JSON.parse(body);
    console.log(data);
})