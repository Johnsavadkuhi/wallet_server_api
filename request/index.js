const axios = require('axios');

async function requestData(data){

  const url = "http://127.0.0.1:12345"
  const password = "M001132001132"  
  const username = "john" 
  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString('base64');
  

const  config = {
  method: 'post',
  url: 'http://127.0.0.1:12345/',
  headers: { 
  
    'Authorization': 'Basic '+ encodedToken
  },
  data
};

 return await axios(config)
    
}

module.exports = requestData 