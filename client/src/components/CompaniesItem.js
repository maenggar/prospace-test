import React from "react";
import { MenuItem } from "@material-ui/core";
import { getListCompany } from "../queries/Queries";
import { graphql } from "graphql";

const CompaniesItem = (props) => {
  let data = props.data;
  return (
    <div>
      {data.companies.map((company) => (
        <MenuItem key={company.id}>{company.name}</MenuItem>
      ))}
    </div>
  );
};
export default graphql(getListCompany)(CompaniesItem);
