const {gql}= require("apollo-server-express")


module.exports= gql`

scalar Date 

type GetBlockCount{
    n: Int 
}

extend type Query{
    getblockcount: GetBlockCount
}

`