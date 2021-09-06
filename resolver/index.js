
const _ = require("lodash")

const getblockResolvers = require("./getblock")
const getblockchaininfoResolver = require("./getblockchaininfo")
const getblockcountResolver = require("./getblockcount")
const getblockfilterResolver = require("./getblockfilter") 
const getblockhashResolver = require("./getblockhash")
const getblockheaderResolver = require("./getblockheader")
const getmempoolancestorsResolver = require("./getmempoolancestors")
const getaddressinfoResolver = require("./getaddressinfo")
const loadwalltResolver = require("./loadwallet")
const unloadwalletResolver = require("./unloadwallet") 

module.exports = _.merge({},
     
     getblockResolvers,
     getblockchaininfoResolver,
     getblockcountResolver ,
     getblockfilterResolver, 
     getblockhashResolver,
     getblockheaderResolver ,
     getmempoolancestorsResolver , 
     getaddressinfoResolver, 
     loadwalltResolver, 
     unloadwalletResolver


    )
