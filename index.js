require('events').EventEmitter.defaultMaxListeners = Infinity; 
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http2Express = require("http2-express-bridge"); 
const httpServer = require("https"); 
const {serverOptions } = require("./options"); 
const typeDefs = require("./schema")
const resolvers = require("./resolver"); 
const {buildSubgraphSchema} = require("@apollo/federation")
const cors = require("cors")
const  { ApolloServerPluginInlineTrace } = require("apollo-server-core");
// const helmet = require("helmet")
const {ApolloServerPluginLandingPageGraphQLPlayground} = require("apollo-server-core")


async function startApolloServer(typeDefs, resolvers) {
   
  // Same ApolloServer initialization as before
  const server = new ApolloServer({
    schema:buildSubgraphSchema([{typeDefs , resolvers}]), 
    plugins: [
      ApolloServerPluginInlineTrace({
        rewriteError: (err) => err.message.match(SENSITIVE_REGEX) ? null : err,
      }),
    ],
  })  

  // Required logic for integrating with Express
  await server.start();
  const app = http2Express(express);
   app.use(cors())
  //  app.use(helmet())
  
  const secureServer = httpServer.createServer(serverOptions, app); 

  server.applyMiddleware({
    app ,
     path: '/'  
  });
  const port = 4000 + parseInt(process.env.NODE_APP_INSTANCE);

  // Modified server startup
  await new Promise(resolve => secureServer.listen({ port  }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}
startApolloServer(typeDefs , resolvers)
