import React from "react";
import {
  Container,
  Paper,
  Grid,
  Divider,
  createMuiTheme,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import TestApollo from "../components/TestApollo";

const theme = createMuiTheme();
const useStyle = makeStyles({
  paper: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(5),
  },
  form: {
    paddingBottom: theme.spacing(2),
  },
  horisontalDivider: {
    marginTop: theme.spacing(4),
  },
});

function OfficePage() {
  const classes = useStyle();
  return (
    <div className="overview-section">
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={3}>
          <Grid Container direction="row">
            <Grid item>
              <Typography variant="h5" align="left">
                Company Name
              </Typography>
            </Grid>
            <Divider variant="fullWidth" />
            <Grid item>
              <Grid container direction="column">
                <Grid item xs={4} style={{ marginTop: "1em" }}>
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography variant="h6">Address :</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Address detail</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ marginTop: "0.5em" }}>
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography variant="h6">Revenue :</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Revenue detail</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ marginTop: "0.5em" }}>
                  <Grid
                    container
                    direction="column"
                    alignContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Typography variant="h6">Phone Number :</Typography>
                    </Grid>
                    <Grid item>
                      <Typography> xx-xxx-xxx-xxx</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justify="flex-end"
                style={{ marginTop: "1em" }}
              >
                <Grid item style={{ marginRight: "1em" }}>
                  <Button variant="contained" color="primary">
                    Add office
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="/"
                  >
                    Back to overwiev
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider className={classes.horisontalDivider} variant="fullWidth" />
          <Grid container direction="column">
            <Grid item xs="auto" sm="auto" md="auto">
              <TestApollo />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
export default OfficePage;
