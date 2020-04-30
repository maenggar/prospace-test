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
function SubmitForm(props) {
  const displayData = () => {
    let data = props.data;
    if (data.loading) {
      return <option disabled>loading Company</option>;
    } else {
      return data.companies.map((companie) => {
        return <option>{companie.name}</option>;
      });
    }
  };

  return (
    <div>
      <from id="addCompany">
        <div>
          <label for="">Company name</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Address</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Office</label>
          <select name="" id="">
            <option value="">Select Office</option>
            {displayData()}
          </select>
        </div>
      </from>
    </div>
  );
}
export default graphql(getCompanyQuery)(SubmitForm);
