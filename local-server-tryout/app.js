const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


const port = 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}/graphql`)
  console.log(`now listening for requests on port ${port}`);
});
