const {gql}= require("apollo-server-express")


module.exports=gql`

type GetBlockFilter{
    filter: String 
    header: String 

}

extend type Query{
    getblockfilter(blockhash:String , filtertype:String ): GetBlockFilter
}

`