const {gql } = require("apollo-server-express")

module.exports=gql`

type GetChainTips{
    height: Float 
    hash: String 
    branchlen: Float 
    status: String 
}
extend type Query{
    getchaintips:[GetChainTips]
}

`