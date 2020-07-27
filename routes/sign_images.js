const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const sign_images = express.Router();

var ImgixClient = require('imgix-core-js');

var client = new ImgixClient({
  domain: process.env.DOMAIN,
  secureURLToken: process.env.SECURETOKEN
});

sign_images.use(cors())
sign_images.use(bodyParser.json());
sign_images.use(bodyParser.urlencoded({ extended: false }));

sign_images.post('/', (req, res, next) => {
  let body = req.body;
  let output = {urls: []}

    for(let i of body.urls) {
      let urlObj = new URL(i);
      let urlParams = {};
  
      for(let pair of urlObj.searchParams.entries()){
        urlParams[pair[0]] = pair[1];
      }
      
      if(body.srcset === true) {
        let srcset = client.buildSrcSet(urlObj.pathname, urlParams);
        output.urls.push([srcset.replace(/\n/g,"")])
      } else {
        output.urls.push(client.buildURL(urlObj.pathname, urlParams))
      }
    };

  res.send(output)
  console.log(output)

})

module.exports = sign_images;
