const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect("mongodb://192.168.99.100:27017/mongoQuestio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// mongoose.connect('mongodb://192.168.99.100:27017/mongoQuestio',function(){
//     mongoose.connection.db.dropDatabase();
// });

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers,
    endpoint: '/graphql'
})

server.start()