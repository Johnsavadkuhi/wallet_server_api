const {gql } = require("apollo-server-express")

module.exports= gql`

    type LoadWallet {
        name:String 
        warning:String 
    }    

    extend type Query{
        loadwallet(filename:String ,  load_on_startup:Boolean=null ):LoadWallet
    }

`