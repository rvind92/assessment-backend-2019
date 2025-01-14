const config           = require('config')
const express          = require('express')
const mongoose         = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
mongoose.Promise       = global.Promise

const { seedUsers } = require('./db-init')

const typeDefs = require('./graphql/schemas/schema')
const resolvers = require('./graphql/schemas/resolvers')

mongoose.connect(config.get('db.uri'), { useNewUrlParser: true, useFindAndModify: false })
  .then(async () => {
    console.log('INFO: Connected to the database')

    await seedUsers()

    // TODO: Initialize Apollo with the required arguments as you see fit
    const server = new ApolloServer({ typeDefs, resolvers })

    const app = express()
    server.applyMiddleware({ app })

    const { host, port } = config.get('server')

    app.listen({ port }, () => {
      console.log(`Server ready at http://${ host }:${ port }${ server.graphqlPath }`)
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(-1)
  })
