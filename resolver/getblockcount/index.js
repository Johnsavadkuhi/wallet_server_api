
const requestData = require("../../request")

 const  data = `{ "method": "getblockcount"}`;

module.exports = {
   
    Query: {
        getblockcount: async () => {

            const r = await requestData(data)
            const d = JSON.stringify({ n: r.data.result })
            return JSON.parse(d)
        }
      
    }
}

