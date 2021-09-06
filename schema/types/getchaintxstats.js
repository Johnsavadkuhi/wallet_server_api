const {gql } = require("apollo-server-express")

module.exports=gql`

type GetChainTxStats{
    time:Date 
    txcount: Float 
    window_final_block_hash:String 
    window_final_block_height:Float
    window_block_count:Float 
    window_tx_count:Float 
    window_interval:Float 
    txrate:Float 

}

extend type Query{
    getchaintxstats(nblocks:Float , blockhash:String): GetChainTxStats
}


`