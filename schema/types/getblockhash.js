const {gql}= require("apollo-server-express")

module.exports=gql`

type GetBlockHash{
    hex:String 
}

extend type Query {

    getblockhash(height: Float): GetBlockHash

}

`