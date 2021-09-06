const requestData = require("../../request")

module.exports = {

    ResultGetMemPoolAncestors:{
        
        __resolveType(obj){
            if(obj.vsize){
                return "Verbosity_True"
            }
            if(obj[0].hex){
                return "Verbosity_False"
            }
            return null 
        }

    }, 
    Query:{

        getmempoolancestors:async (_ , args )=>{
            
            console.log(args);
            const  data = `{ "method": "getmempoolancestors" , "params":["${args.txtid}" ,${args.verbose} ]}`;
            
            const result  = await requestData(data)
            
            console.log("result : " , result )

        }
    }

}