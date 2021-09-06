const {gql } = require("apollo-server-express")

module.exports= gql`

    type UnLoadWallet {
        warning:String 
    }    

    extend type Query{
        unloadwallet(filename:String ,  load_on_startup:Boolean=null ):UnLoadWallet
    }

`
