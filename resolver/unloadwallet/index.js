
const requestData = require("../../request")

module.exports ={

    Query:{
        loadwallet:async (_, args)=>{
            const  data = `{"method": "unloadwallet", "params": ["${args.filename}" , ${args.load_on_startup}]}`;
            const result = await requestData(data)
            return result.data.result 
        }

    }
}