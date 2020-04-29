const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

const OfficeType = new GraphQLObjectType({
  name: "Office",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longtitude: { type: GraphQLString },
    startDate: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve(data, args) {
        console.log(data);
        //return _.find(authors, { id: data.authorId });
      },
    },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    revenue: { type: GraphQLString },
    PhoneCode: { type: GraphQLInt },
    PhoneNumber: { type: GraphQLInt },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    office: {
      type: OfficeType,
      args: { id: { type: GraphQLID } },
      resolve(data, args) {
        //return _.find(books, { id: args.id });
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLID } },
      resolve(data, args) {
        // return _.find(authors, { id: args.id });
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});
module.exports = schema;
