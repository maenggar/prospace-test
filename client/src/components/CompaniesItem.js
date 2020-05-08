import React from "react";
import { MenuItem } from "@material-ui/core";
import { getListCompany } from "../queries/Queries";
import { graphql } from "react-apollo";

const CompaniesItem = (forwardedRef, listCompany, ...props) => {
  //const { forwardedRef, ...props } = props;
  let data = props.getListCompany;
  return (
    <div div {...props} ref={forwardedRef}>
      {data.companies.map((company) => (
        <MenuItem key={company.id} value={company.id}>
          {company.name}
        </MenuItem>
      ))}
    </div>
  );
};
export default graphql(getListCompany)(
  React.forwardRef((props, ref) => (
    <CompaniesItem {...props} forwardedRef={ref} />
  ))
);
