module.exports = {
  apps : [{
    name   : "learn",
    script : "./index.js", 
    instances: "max",
    exec_mode: "cluster",
    watch:true , 
    env_production: {
      NODE_ENV: "production"
   },
   env_development: {
      NODE_ENV: "development" 
   } ,   
      ignore_watch:["[\/\\]\./", "node_modules"], 
  

  }]
}
