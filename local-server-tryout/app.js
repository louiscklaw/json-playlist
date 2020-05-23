const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

// allow cross-origin request
app.use(cors())

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
