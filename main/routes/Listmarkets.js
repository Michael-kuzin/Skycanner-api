const express = require("express");

const router = express.Router();

const axios = require("axios");

var options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': '8a3276ff60msh33260bd41351506p1ba520jsnb5f5f830627b'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

module.exports = router
