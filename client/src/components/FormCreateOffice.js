import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Grid,
  Button,
  Select,
  Typography,
  makeStyles,
  createMuiTheme,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DatePicker from "./DatePicker";

import { graphql } from "react-apollo";
import { getListCompany } from "../queries/Queries";

let theme = createMuiTheme();
const useStyle = makeStyles({
  root: {
    lineHeight: theme.spacing(0.6),
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
  locationField: {
    lineHeight: theme.spacing(0.3),
    marginTop: theme.spacing(-4),
  },
  startDate: {
    marginTop: theme.spacing(3),
  },
  companylist: {
    marginTop: theme.spacing(2),
  },
  createButton: {
    marginTop: theme.spacing(-4),
  },
});

function FormCreateOffice(props) {
  const classes = useStyle();

  const addOfficeMutation = () => {
    return props.mutate({
      variables: {
        name: props.values.name,
        latitude: props.values.latitude,
        longtitude: props.values.longtitude,
        startDate: props.values.startDate,
        companyId: props.values.companyId,
      },
    });
  };

  const CompaniesItem = () => {
    let data = props.data;
    if (data.loading) {
      return <MenuItem>data stil loading</MenuItem>;
    } else {
      return data.companies.map((companie) => {
        return <MenuItem>{companie.name}</MenuItem>;
      });
    }
  };

  return (
    <Grid container className={classes.root}>
      <Form>
        <Grid item>
          <Typography className={classes.heading} variant="h5" align="left">
            Create Office
          </Typography>
        </Grid>
        <Grid item>
          {props.touched.name && props.errors.name && (
            <Alert severity="error">Please fill the office name</Alert>
          )}
          <Field type="text" name="name" placeholder="Office Name">
            {({ field }) => (
              <TextField
                fullWidth
                id="office-name"
                label="Office Name"
                variant="outlined"
                value={props.values.name}
                {...field}
              />
            )}
          </Field>
        </Grid>

        <Grid container className={classes.locationField}>
          <Grid item>
            <Typography variant="caption">Location</Typography>
          </Grid>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item xs={6}>
                {props.touched.latitude && props.errors.latitude && (
                  <Alert severity="error">Cannot be null</Alert>
                )}
                <Field type="text" name="latitude" placeholder="latitude">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      id="latitude"
                      label="Latitude"
                      variant="outlined"
                      value={props.values.latitude}
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={5}>
                {props.touched.longtitude && props.errors.longtitude && (
                  <Alert severity="error">Cannot be null</Alert>
                )}
                <Field type="text" name="longtitude" placeholder="longtitude">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      id="longtitude"
                      label="Longtitude"
                      variant="outlined"
                      value={props.values.longtitude}
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.startDate}>
          {props.touched.startDate && props.errors.startDate && (
            <Alert severity="error">Please fill the start date</Alert>
          )}
          <Field type="text" name="date" placeholder="Company Start Date">
            {({ field }) => <DatePicker {...field} />}
          </Field>
        </Grid>

        <Grid item className={classes.companylist}>
          {props.touched.idCompany && props.errors.idCompany && (
            <Alert severity="error">Please select the company</Alert>
          )}
          <FormControl variant="outlined" label="List" fullWidth>
            <InputLabel id="company-list">Company List</InputLabel>
            <Select
              labelId="company-list-label"
              id="simple-select-outlined"
              value={props.idCompany}
              label="Company List"
            >
              <CompaniesItem />
            </Select>
          </FormControl>
        </Grid>
        <Button
          className={classes.createButton}
          variant="contained"
          color="primary"
          onClick={addOfficeMutation}
          fullWidth
        >
          create
        </Button>
      </Form>
    </Grid>
  );
}

const FormOffice = withFormik({
  mapPropsToValues({ name, latitude, longtitude, startDate, companyId }) {
    return {
      name: name || "",
      latitude: latitude || "",
      longtitude: longtitude || "",
      startDate: startDate || "",
      companyId: companyId || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.string().required(),
    longtitude: Yup.string().required(),
    startDate: Yup.string().required(),
    companyId: Yup.string().required(),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(FormCreateOffice);
export default graphql(getListCompany)(FormOffice);
