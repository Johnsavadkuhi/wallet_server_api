const {gql } = require("apollo-server-express")

module.exports= gql`

type GetTxOut{
    bestblock:String
    confirmations:Int
    value:Float
    sscriptPubKey:ScriptPubKey
    coinbase:Boolean 
}

type ScriptPubKey{
    asm:String
    hex:String 
    reqSigs:Float
    type:String 
    addresses:[String]
}
extend type Query{
    gettxout(txid:String , n:Float , include_mempool:Boolean=true):GetTxOut
}
`
