const express = require("express");

const router = express.Router();

const axios = require("axios");

let arr = [];

var options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: 'Stockholm'},
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': '8a3276ff60msh33260bd41351506p1ba520jsnb5f5f830627b'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  arr.push(response.data.Places)
}).catch(function (error) {
	console.error(error);
});

router.get('/', async function (req, res) {
  res.send(arr);
});


module.exports = router
