// import express module
const express = require("express");
// import axios module (assure la communication entre serveur BE et API)
const axios= require("axios");
//
const router=express.Router();
router.post("/", (req, res) => {
    console.log("Here into BL : display city ", req.body);
    let key="e48c8fddf6dc7883144db378b52d21f4";
  let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityInput}&appid=${key}`;
  console.log("here url",apiURL)
  axios.get(apiURL).then((response)=>{
   
    console.log("here response from API",response);
  
  let data={
    temperature : response.data.main.temp,
    pression :response.data.main.pressure,
    humidity :response.data.main.humidity ,
    speedVent : response.data.wind.speed,
    icone : `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  }
  console.log("here response from API",data);
    res.json({dataWearth : data});
  });
   
  });
  // make router impotable from another files
module.exports = router;