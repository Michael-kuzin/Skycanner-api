import express from "express";

const router = express.Router();

const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key":"8a3276ff60msh33260bd41351506p1ba520jsnb5f5f830627b",
    "useQueryString":true
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

export default router;
