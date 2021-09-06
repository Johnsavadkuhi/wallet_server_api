
const requestData = require("../../request")

const getblockResolvers = {

    GetBlock:{

    __resolveType(obj) {
      
        if (obj.hex) {
            return "Verbosity_0"
        }
        if (obj.tx) {
            if (obj.tx[0].txid){
                 return "Verbosity_2"
            }
             else {
                 console.log("Verbosity_1")
                return "Verbosity_1"
             }

        }
        return null 
    }
} , 
Query:{

    getblock: async (_, args) => {

        let p2 = 1; 
        if(args.verbosity==="ONE")
            p2=1 
        if(args.verbosity==="ZERO") 
            p2=0 
        if (args.verbosity==="TWO")
             p2=2

         const  data = `{"method": "getblock", "params": ["${args.blockHash}" , ${p2}]}`;

 
        const r = await requestData(data)

        if (args.verbosity === "ZERO") {

            const d = JSON.stringify({ hex: r.data.result })
            return JSON.parse(d)
        }
        console.log("r.data.result : " , r.data.result );
        return r.data.result;

    }
  
}
   

}

module.exports = getblockResolvers