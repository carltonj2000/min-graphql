const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas");

const app = express();
const PORT = process.env.PORT || 5353;

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log("Server running on port.", PORT);
});
