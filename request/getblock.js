const  axios = require('axios');

const  data = '{"jsonrpc": "1.0", "id": "1", "method": "getblock", "params": ["1bf044e45cb598a45ba3b5f98fc2480bc0fa9f370c0aa2695f27d7661b9f7ea4"]}';

const  config = {
  method: 'post',
  url: 'http://127.0.0.1:12345/',
  headers: { 
    'content-type': 'text/plain;'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});