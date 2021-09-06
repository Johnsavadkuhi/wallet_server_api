
const requestData = require("../../request")
 
const  data = `{ "method": "getblockchaininfo"}`;

module.exports = {
   
    Query: {
        getblockchaininfo: async () => {

            const r = await requestData(data)
            return r.data.result 
        }
      
    }
}

