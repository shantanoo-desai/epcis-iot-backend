import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import typeDefs  from './graphql/schema';
import resolvers from './graphql/resolvers';
import { connect } from 'mongoose';

// console.log(environment);
const server = new ApolloServer({
    resolvers, 
    typeDefs,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground
});

const DB_URI = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin&w=1`;
// const DB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@desaiclustor0-p8e7q.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true`
console.log(DB_URI);
connect(DB_URI, {useNewUrlParser: true, useFindAndModify: false})
.then(() => {
    server.listen(environment.port)
        .then( ({url}) => {
            console.log(`Server Reading at ${url}`);
        })
        .catch(err => {
            console.log(err);
        });
    }
)
.catch(err => {
    console.log(err);
});

// Webpack Hot Module Replacement 
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module Disposed. '));
}
