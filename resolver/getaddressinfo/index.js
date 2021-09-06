const requestData = require("../../request/")

module.exports = {

    Query:{
        getaddressinfo:async (_, args)=>{
            const  data = `{"method": "getaddressinfo", "params": ["${args.address}"]}`;

            const result = await requestData(data)
            console.log(result.data.result )
            return result.data.result 


        }
    }
}