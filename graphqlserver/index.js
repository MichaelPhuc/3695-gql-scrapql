import apolloServer from 'apollo-server'

const { ApolloServer, gql } = apolloServer

const typeDefs = gql`
    type Query {
    hello: String
}
`

const resolvers = {
    Query: {
        hello: () => "hello world graphql version"
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen({port: 4000}).then(({url}) => console.log(`server running at ${url}`))
