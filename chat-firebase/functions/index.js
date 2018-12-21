"use strict"

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onRequest((req, res) => {
  console.log("Request : "+JSON.stringify(req.body));  
  if(req.body.queryResult.action== 'greeting'){ 
    let speech = "Hi, Welcome how can I help you";
   
  //   let speech = "Hi I am Ana,Your booking assistant. I can help you book a flight" 
         return res.json({
          fulfillmentText: speech
         });
  }
});
 
