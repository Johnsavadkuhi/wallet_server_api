const { mergeTypeDefs } = require('@graphql-tools/merge');

const {getblock,getblockchaininfo ,getblockcount ,
     getblockfilter , getblockhash, getblockheader ,
     getmempoolancestors,
     } = require("./types");

const getaddressinfo = require("./types/wallet/getaddressinfo")
const  loadwallet = require("./types/wallet/loadwallet")
const unloadwallet = require("./types/wallet/unloadwallet")

const types = [
getblock ,
getblockchaininfo,
getblockcount , 
getblockfilter , 
getblockhash , 
getblockheader ,
getmempoolancestors , 
getaddressinfo , 
loadwallet , 
unloadwallet 
]

// const typeDefs = gql`

module.exports = mergeTypeDefs(types);
