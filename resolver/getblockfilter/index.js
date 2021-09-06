
const requestData = require("../../request")


module.exports = {
  
   Query: {
        getblockfilter: async (_, args) => {
            console.log(args);
            const  data = `{ "method": "getblockfilter", "params": ["${args.blockhash}" ,"${args.filtertype}"]}`;
            const r = await requestData(data)
        //   const d = JSON.stringify({ filter: r.data.result , header:r.data.result})
        //    return JSON.parse(d)
        return r.data.result 
       }
     
   }
}

