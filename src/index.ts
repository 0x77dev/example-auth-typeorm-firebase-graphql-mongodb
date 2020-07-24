import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => console.log("Server is running on localhost:4000"));
