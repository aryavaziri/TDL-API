const books = [
  {
    title: "The Awakening",
    author: "Kate Chopinasdfasfas",
    number: 123,
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    number: 456,
  },
];
const resolvers = {
  Query: { books: () => books },
  //   Mutation: {},
};
export default resolvers;
