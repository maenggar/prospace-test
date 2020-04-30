import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

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
function TestApollo(props) {
  const displayData = () => {
    let data = props.data;
    if (data.loading) {
      return <h3>data stil loading</h3>;
    } else {
      return data.companies.map((companie) => {
        return (
          <div>
            <h4>{companie.name}</h4>
            <h4>{companie.address}</h4>
            <h4>{companie.revenue}</h4>
            <div style={{ display: "flex" }}>
              <h4>`(+{companie.PhoneCode})`</h4>
              <h4>{companie.PhoneNumber}</h4>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {displayData()}
    </div>
  );
}
export default graphql(getCompanyQuery)(TestApollo);
