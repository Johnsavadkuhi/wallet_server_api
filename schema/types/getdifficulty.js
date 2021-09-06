const {gql } = require("apollo-server-express")

module.exports=gql`
type GetDifficulty{
    n:Float 
}

extend type Query{
    getdifficulty:GetDifficulty   
}


`



