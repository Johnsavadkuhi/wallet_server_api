
const {gql}= require("apollo-server-express")

module.exports =gql`

type GetBlockchainInfo{
    chain: String
    blocks: Float 
    headers: Float 
    bestblockhash: String
    difficulty: Float 
    mediantime: Date 
    verificationprogress: Float 
    initialblockdownload: Boolean 
    chainwork: String  
    size_on_disk: Float 
    pruned: Boolean 
    pruneheight: Float 
    automatic_pruning: Boolean
    prune_target_size: Float 
    softforks: SoftForks 
    warnings: String 
}

type SoftForks{
    xxxx:XXXX
}

type XXXX{
    type: String
    bip9:Bip9
    height: Float
    active: Boolean  

}

type Bip9{
    status: String 
    bit: Float 
    start_time:Date 
    timeout: Date 
    since: Float 
    statistics:Statistics

}

type Statistics{
    period: Float 
    threshold: Float
    elapsed: Float 
    count: Int 
    possible: Boolean 


}

extend type Query{

    getblockchaininfo:GetBlockchainInfo
}


`