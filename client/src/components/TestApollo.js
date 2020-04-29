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
  console.log(props);

  return (
    <div>
      <ul>
        <li>test apollo</li>
      </ul>
    </div>
  );
}
export default graphql(getCompanyQuery)(TestApollo);
