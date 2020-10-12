import express from "express";

const router = express.Router();


const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2019-09-01",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key":"8a3276ff60msh33260bd41351506p1ba520jsnb5f5f830627b",
    "useQueryString":true
    },"params":{
    "inboundpartialdate":"2019-12-01"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })


export default router;
