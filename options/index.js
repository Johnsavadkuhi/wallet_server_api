const fs = require("fs")
const path = require("path")

exports.serverOptions ={
    key: fs.readFileSync(path.resolve("/home/mmc/learn/ssl/private.key") ),
    cert:  fs.readFileSync("/home/mmc/learn/ssl/certificate.crt"),
    allowHTTP1: true
}