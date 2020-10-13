const express = require("express");

const router = express.Router();


const axios = require("axios");

const arr = [];

router.get('/', async function (req, res) {

    const result = await axios.get('http://localhost:3002/api/v1/listplaces')
    // console.log(result);
     console.log(result.data[0]);
     console.log(arr)

    result.data[0].forEach((elem, i) => {
      if(elem.CountryName === arr[i].CountryName) {
        arr.push(elem)
      }
    });

      res.send(arr);

 // const result = await axios.get('http://localhost:3002/api/v1/listmarkets')
 //
 // result.data.Countries.forEach((elem, i) => {
 //       if(elem.Name === arr.elem.Name) {
 //         arr.push(elem)
 //    }
 //  });
 //
 //      res.send(arr);
  });








router.post('/',function (req,res) {
  console.log("post req")
      let reqObj = req.body;

       arr.push(reqObj);

       res.json(reqObj);
});


module.exports = router
