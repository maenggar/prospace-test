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
    $name: String,
    $address: String,
    $revenue: String,
    $PhoneCode: Int,
    $PhoneNumber: Int
  ) {
    addCompany(
      name: $name,
      address: $address,
      revenue: $revenue,
      PhoneCode: $PhoneCode,
      PhoneNumber: $PhoneNumber
    ) {
      name
      address
      revenue
      PhoneCode
      PhoneNumber
    }
  }
`;

export { getCompanyQuery, getOfficeQuery, addCompany };
