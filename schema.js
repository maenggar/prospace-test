const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
} = graphql;

const Company = require("./models/CompanyModel");
const Office = require("./models/OfficeModel");

const OfficeType = new GraphQLObjectType({
  name: "Office",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longtitude: { type: GraphQLFloat },
    startDate: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve(data, args) {
        return Company.findById(data.companyId);
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
    Office: {
      type: new GraphQLList(OfficeType),
      resolve(data, args) {
        return Office.find({ companyId: data.id });
      },
    },
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
        return Office.findById(args.id);
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLID } },
      resolve(data, args) {
        return Company.findById(args.id);
      },
    },
    offices: {
      type: new GraphQLList(OfficeType),
      resolve(data, args) {
        return Office.find({});
      },
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(data, args) {
        return Company.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        revenue: { type: GraphQLString },
        PhoneCode: { type: GraphQLInt },
        PhoneNumber: { type: GraphQLInt },
      },
      resolve(data, args) {
        let company = new Company({
          name: args.name,
          address: args.address,
          revenue: args.revenue,
          PhoneCode: args.PhoneCode,
          PhoneNumber: args.PhoneNumber,
        });
        return company.save();
      },
    },
    addOffice: {
      type: OfficeType,
      args: {
        name: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longtitude: { type: GraphQLFloat },
        startDate: { type: GraphQLString },
        companyId: { type: GraphQLID },
      },
      resolve(data, args) {
        let office = new Office({
          name: args.name,
          latitude: args.latitude,
          longtitude: args.longtitude,
          startDate: args.startDate,
          companyId: args.companyId,
        });
        return office.save();
      },
    },
    deleteCompany: {
      type: CompanyType,
      args: {
        companyId: { type: GraphQLID },
      },
      resolve(data, args) {
        const deleteCompany = Company.findByIdAndRemove(args.companyId);
        return deleteCompany.exec();
      },
    },
    deleteOffice: {
      type: CompanyType,
      args: {
        officeId: { type: GraphQLID },
      },
      resolve(data, args) {
        const deleteOffice = Office.findByIdAndRemove(args.officeId);
        return deleteOffice.exec();
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
module.exports = schema;
