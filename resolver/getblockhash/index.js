
const requestData = require("../../request")


module.exports = {
  
   Query: {
       getblockhash: async (_ , args) => {
        const  data = `{ "method": "getblockhash" , "params":[${args.height}]}`;

           const r = await requestData(data).catch(error=>{
               if(error)return error.response.data 
           })
           const d = JSON.stringify({ hex: r.data.result })
           return JSON.parse(d)
       }
     
   }
}

