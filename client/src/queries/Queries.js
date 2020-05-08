import { gql } from "apollo-boost";

const getCompanyQuery = gql`
  {
    companies {
      id
      name
      address
      revenue
      PhoneCode
      PhoneNumber
    }
  }
`;
const getSingleCompanyQuery = gql` 
    query($id:ID){
      company(id:$id){
        id
        name
        address
        revenue
        PhoneCode
        PhoneNumber
        Office{
          id
          name
          latitude
          longtitude
          startDate
        }
      }
    }
  `;

const getListCompany = gql`
  {
    companies {
      id
      name
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
    $companyId: ID
    $name: String,
    $latitude: Float,
    $longtitude: Float,
    $startDate: String,
  ) {
    addOffice(
      companyId: $companyId,
      name: $name,
      latitude: $latitude,
      longtitude: $longtitude,
      startDate: $startDate
    ) {
      name
      latitude
      longtitude
      startDate
      id
    }
  }
`;
const deleteCompany = gql`
  mutation($companyId: ID) {
    deleteCompany(companyId: $companyId) {
      name
      id
    }
  }
`;
const deleteOffice = gql`
  mutation($officeId: ID) {
    deleteOffice(officeId: $officeId) {
      name
      id
    }
  }
`;
export {
  getCompanyQuery,
  getSingleCompanyQuery,
  getOfficeQuery,
  getListCompany,
  addCompany,
  addOffice,
  deleteCompany,
  deleteOffice  
};
