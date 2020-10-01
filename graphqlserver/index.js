import apolloServer from 'apollo-server'

const { ApolloServer, gql } = apolloServer

const typeDefs = gql`
    type Note {
        title: String
        content: String
        dateCreated: String
    }
    
    type Reminder {
        title: String
        content: String
        reminderTime: String
    }

    type Query {
        notes: [Note]
        reminders: [Reminder]
    }

`
const notes =[
    {
        title: 'Avocado Egg Toast Recipe',
        content: '4 slices of bread, 4 eggs, 1 avocado',
        dateCreated: "2020-10-01"
    },
    {
        title: 'How to become the best at GraphQl',
        content: 'Learn',
        dateCreated: "2020-10-01"
    }
]

const reminders = [
    {
        title: 'Do Homework',
        content: 'ACIT 3695 Assignment 1',
        reminderTime: "2020-10-01 10:00"
    },
    {
        title: 'Workout',
        content: 'Leg day!',
        reminderTime: "2020-10-01 10:00"
    }
]

const resolvers = {
    Query: {
        notes: () => notes,
        reminders: () => reminders
    },
}



const server = new ApolloServer({typeDefs, resolvers})
server.listen({port: 4000}).then(({url}) => console.log(`server running at ${url}`))
