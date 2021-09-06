const {gql}= require("apollo-server-express")

module.exports=gql`

type  Verbosity_True{
    hash: String 
    confirmations: Float 
    height: Float 
    version: Float 
    versionHex: String 
    merkleroot: String 
    time: Date 
    mediantime: Date 
    nonce: Float 
    bitc: String 
    chainworkd: String
    nTx: Float 
    previousblockhash: String
    nextblockhash: String 

}

type Verbosity_False{
    hex:String 
}
union ResultHeader = Verbosity_True | Verbosity_False 

extend type Query {
    getblockheader(blockhash:String verbosity: Boolean  ): ResultHeader 
}

`