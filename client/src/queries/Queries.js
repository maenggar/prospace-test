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

const testConnect = () => {
  console.log("component is connecting");
};

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

export { getCompanyQuery, addCompany, testConnect };
