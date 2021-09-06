const {gql}= require("apollo-server")

module.exports=gql`
type GetBlockStats{
    avgfee:Float 
    avgfeerate:Float 
    avgtxsize:Float 
    blockhash:String 
    feerate_percentiles:[Float]
    height:Float 
    ins:Float 
    maxfee:Float 
    maxfeerate:Float 
    medianfee:Float 
    mediantime:Float
    mediantxsize:Float 
    minfee:Float
    minfeerate:Float
    mintxsize:Float 
    outs:Float 
    subsidy:Float 
    swtotal_weight:Float 
    twtxs:Float 
    time:Float 
    total_out:Float 
    total_weight:Float 
    totalfee:Float 
    txs:Float 
    utxo_increase:Float 
    utxo_size_inc:Float 
}
type Stats{
    height:String
    time:String 
}
extend type Query{
    getblockstats:(hashblock:String , stats:[stats])
}

`
