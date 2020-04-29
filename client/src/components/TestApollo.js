import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getCompanyQuery = gql`
  {
    companies {
      name
      id
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
        return <li>{companie.name}</li>;
      });
    }
  };

  return (
    <div>
      <ul>{displayData()}</ul>
    </div>
  );
}
export default graphql(getCompanyQuery)(TestApollo);
