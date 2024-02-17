import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log("server", process.env.GRAPHQL_SERVER);
const client = new ApolloClient({
  uri: "http://localhost:3009/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
