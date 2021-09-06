const {gql } = require("apollo-server-express")

module.exports=gql`
scalar Date 
type Verbosity_True{
    transactionid:TransactionId
}

type Verbosity_False{
    hex:String
}
type TransactionId {
    vsize:Float 
    weight:Float 
    fee:Float 
    modifiedfee:Float 
    time:Date 
    height:Float 
    descendantcount:Float
    descendantsize:Float
    descendantfees:Float
    ancestorcount:Float
    ancestorsize:Float 
    ancestorfees:Float 
    wtxid:String 
    fees:Fees 
    depends:[String]
    spentby:[String]
    bip125_replaceable: Boolean     
    unbroadcast:Boolean 
}
type Fees{
    base:Float 
    modified:Float
    ancestor:Float 
    descendant:Float 
}
union ResultGetMemPoolAncestors = Verbosity_True | Verbosity_False

extend type Query{
    getmempoolancestors(txid:String! , verbose:Boolean=false): ResultGetMemPoolAncestors
}
 
`