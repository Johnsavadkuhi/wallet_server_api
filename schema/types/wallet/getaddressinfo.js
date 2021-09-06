const {gql } = require("apollo-server-express")

module.exports= gql`

type GetAddressInfo{
    address:String 
    scriptPubKey:String 
    ismine:Boolean 
    iswatchonly:Boolean 
    solvable:Boolean
    desc:String 
    isscript:Boolean 
    ischange:Boolean 
    iswitness:Boolean 
    witness_version:Float 
    witness_program:String 
    script:String 
    hex:String 
    pubkeys:[String]
    sigsrequired:Float 
    pubkey:String 
    embedded:Embedded
    iscompressed:Boolean 
    timestamp:Float 
    hdkeypath:String 
    hdseedid:String 
    hdmasterfingerprint:String 
    labels:[String]
} 
type Embedded {
    address:String 
    scriptPubKey:String 
    ismine: Boolean 
    iswatchonly:Boolean 
    solvable:Boolean
    desc:String 
    isscript:Boolean 
    ischange:Boolean  
    iswitness:Boolean 
    witness_version:Float 
    witness_program:String 
    script:String 
    hex:String 
    pubkeys:[String]
    sigsrequired:Float 
    pubkey:String 
    iscompressed:Boolean 
    hdmasterfingerprint:String 
    labels:[String]
}
extend type Query{
    getaddressinfo(address:String!):GetAddressInfo 
}

`