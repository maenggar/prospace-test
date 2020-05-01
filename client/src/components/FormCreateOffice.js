import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import {
  TextField,
  Grid,
  Button,
  MenuItem,
  Select,
  Typography,
  makeStyles,
  createMuiTheme,
  FormControl,
  InputLabel,
} from "@material-ui/core";

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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      <Form>
        <Grid item>
          <Typography className={classes.heading} variant="h5" align="left">
            Create Office
          </Typography>
        </Grid>
        <Grid item>
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
          <Field type="text" name="date" placeholder="Company Start Date">
            {({ field }) => (
              <TextField
                fullWidth
                id="start-date"
                label="Start Date"
                variant="outlined"
                value={props.values.date}
                {...field}
              />
            )}
          </Field>
        </Grid>

        <Grid item className={classes.companylist}>
          <FormControl variant="outlined" label="List" fullWidth>
            <InputLabel id="company-list">Company List</InputLabel>
            <Select
              labelId="company-list-label"
              id="simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Company List"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          className={classes.createButton}
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

const FormOffice = withFormik({
  mapPropsToValues({ name, address, revenue, phoneCode, phoneNumber }) {
    return {
      name: name || "",
      address: address || "",
      revenue: revenue || "",
      phoneNumber: phoneNumber || "",
      phoneCode: phoneCode || "",
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(FormCreateOffice);
export default FormOffice;
