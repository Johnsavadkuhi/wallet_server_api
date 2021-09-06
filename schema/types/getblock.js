const {gql } = require("apollo-server-express")

module.exports=gql`

union GetBlock = Verbosity_0 | Verbosity_1 | Verbosity_2 

type Verbosity_0{
    hex: String 
}
 
 type Verbosity_1   {
    hash:String
    confirmations:Int
    size:Float 
    strippedsize:Float 
    weight:Float 
    height:Float
    version:Float
    versionHex:String
    merkleroot:String
    tx:[String]
    time:Date
    mediantime:Date
    nonce:Int
    bits:String
    difficulty:Float
    chainwork:String 
    nTx:Int
    previousblockhash:String 
    nextblockhash:String 

}
type Verbosity_2  {
    hash:String
    confirmations:Int
    size:Float 
    strippedsize:Float 
    weight:Float 
    height:Float
    version:Float
    versionHex:String
    merkleroot:String
    tx:[Tx]
    time:Date
    mediantime:Date
    nonce:Int
    bits:String
    difficulty:Float
    chainwork:String 
    nTx:Int
    previousblockhash:String 
    nextblockhash:String 
    v2:String
}

 type Hash{
    hex:String
}


enum Verbosity{
    ZERO 
    ONE
    TWO
}


type Tx {
    txid: String
    hex: String 
    version: Float
    size: Float 
    vsize: Float 
    weight: Float 
    locktime: Date
    vin: Vin 
    vote: Vote 
}


type Vin{
coinbase:String
txinwitness:[String]
sequence:Float

}


type Vote{
    value:Float
    n:Int
    scriptPubKey:ScriptPubKey 

}

type ScriptPubKey{
    asm:String
    hex:String
    reqSigs:Int
    type:String
    addresses:[String]

}

extend type Query {

    getblock(blockHash:String!, verbosity: Verbosity = ONE): GetBlock

}
`