import { gql } from "apollo-boost";

const getCompanyQuery = gql`
  {
    companies {
      name
      address
      revenue
      PhoneCode
      PhoneNumber
    }
  }
`;

const getOfficeQuery = gql`
  {
    offices {
      id
      name
      latitude
      longtitude
      startDate
    }
  }
`;

const addCompany = gql`
  mutation(
    $name: String
    $address: String
    $revenue: String
    $PhoneCode: Int
    $PhoneNumber: Int
  ) {
    addCompany(
      name: $name
      address: $address
      revenue: $revenue
      PhoneCode: $PhoneCode
      PhoneNumber: $PhoneNumber
    ) {
      id
      name
      address
      revenue
      PhoneCode
      PhoneNumber
    }
  }
`;

const addOffice = gql`
  mutation(
    $name: String
    $latitude: Float
    $longtitude: Float
    $startDate: Int
    $companyId: ID
  ) {
    addCompany(
      name: $name
      latitude: $latitude
      longtitude: $longtitude
      startDate: $startDate
      companyId: $companyId
    ) {
      name
      latitude
      longtitude
      startDate
      companyId
    }
  }
`;

export { getCompanyQuery, getOfficeQuery, addCompany, addOffice };
