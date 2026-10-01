const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express5'); 
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

app.use(cors());
app.use(express.json());

const startApolloServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();
    app.use('/graphql', expressMiddleware(server));
};

startApolloServer();

module.exports = app;