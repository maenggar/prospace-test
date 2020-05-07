import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Grid,
  makeStyles,
  createMuiTheme,
  Button,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { graphql } from "react-apollo";
import { addCompany } from "../queries/Queries";
import CountryCode from "./CountryCode";

let theme = createMuiTheme();

const useStyle = makeStyles({
  root: {
    lineHeight: theme.spacing(0.6),
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
  phoneField: {
    lineHeight: theme.spacing(0.3),
    marginTop: theme.spacing(-1),
  },
});

function FormCreateCompany(props) {
  const classes = useStyle();
  const addCompanyMutation = () => {
    return props.mutate({
      variables: {
        name: props.values.name,
        address: props.values.address,
        revenue: props.values.revenue,
        PhoneCode: parseInt(props.values.PhoneCode),
        PhoneNumber: parseInt(props.values.PhoneNumber),
      },
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography className={classes.heading} variant="h5">
          Create Company
        </Typography>
      </Grid>
      <Form>
        <Grid item>
          {props.touched.name && props.errors.name && (
            <Alert severity="error">Please fill the company name</Alert>
          )}
          <Field type="text" name="name" placeholder="Company Name">
            {({ field }) => (
              <TextField
                fullWidth
                id="company-name"
                label="Company Name"
                variant="outlined"
                value={props.values.name}
                {...field}
              />
            )}
          </Field>
        </Grid>
        <Grid item>
          {props.touched.address && props.errors.address && (
            <Alert severity="error">Please fill the company address</Alert>
          )}
          <Field type="text" name="address" placeholder="Company Address">
            {({ field }) => (
              <TextField
                fullWidth
                id="company-address"
                label="Company Address"
                variant="outlined"
                value={props.values.address}
                {...field}
              />
            )}
          </Field>
        </Grid>
        <Grid item>
          {props.touched.revenue && props.errors.revenue && (
            <Alert severity="error">Please fill the company revenue</Alert>
          )}
          <Field type="text" name="revenue" placeholder="Company Revenue">
            {({ field }) => (
              <TextField
                fullWidth
                id="company-revenue"
                label="Company Revenue"
                variant="outlined"
                value={props.values.revenue}
                {...field}
              />
            )}
          </Field>
        </Grid>
        {/* Phone Field */}
        <Grid className={classes.phoneField} container>
          <Grid item>
            <Typography variant="caption">PhoneNumber</Typography>
          </Grid>

          <Grid item>
            <Grid container direction="row" justify="space-between">
              <Grid item xs={3}>
                {props.touched.PhoneCode && props.errors.PhoneCode && (
                  <Alert severity="error"> Cannot be null</Alert>
                )}
                <Field type="text" name="PhoneCode" placeholder="PhoneCode">
                  {({ field }) => (
                    <CountryCode
                      id="phone-code"
                      label="Phone Code"
                      value={props.values.PhoneCode}
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={8}>
                {props.touched.PhoneNumber && props.errors.PhoneNumber && (
                  <Alert severity="error">Cannot be null</Alert>
                )}
                <Field
                  type="text"
                  name="PhoneNumber"
                  placeholder="Phone Number"
                >
                  {({ field }) => (
                    <TextField
                      fullWidth
                      id="phone-number"
                      label="xxx-xxx-xxx"
                      variant="outlined"
                      value={props.values.PhoneNumber}
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={addCompanyMutation}
          fullWidth
        >
          create
        </Button>
      </Form>
    </Grid>
  );
}

const FormCompany = withFormik({
  mapPropsToValues({ name, address, revenue, PhoneCode, PhoneNumber }) {
    return {
      name: name || "",
      address: address || "",
      revenue: revenue || "",
      PhoneNumber: PhoneNumber || "",
      PhoneCode: PhoneCode || 0,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Company Name must be requiered"),
    address: Yup.string().required("Company Address must be required"),
    revenue: Yup.string().required("Revenue must be required"),
    PhoneNumber: Yup.number()
      .min(9, "at least 9 character")
      .required("Phone Number must be requiered"),
    PhoneCode: Yup.number()
      .min(2, "at least 2 character")
      .required("Phone Code must be requiered"),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(FormCreateCompany);
export default graphql(addCompany)(FormCompany);
