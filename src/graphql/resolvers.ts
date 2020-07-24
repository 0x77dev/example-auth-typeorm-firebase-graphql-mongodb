export const resolvers = {
  Query: {
    hello: (_: any, { name }: { name: string | undefined }) =>
      `Hello ${name || "World"}`,
  },
};

export default resolvers;
