const userData = require("../MOCK_DATA.json");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { first_name, last_name, email, gender, ip_address } = args;
        const user = {
          id: userData[userData.length - 1].id + 1,
          first_name,
          last_name,
          email,
          gender,
          ip_address,
        };
        userData.push(user);
        return user;
      },
    },
  },
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
