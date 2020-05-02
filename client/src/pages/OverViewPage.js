import React from "react";
import {
  Container,
  Paper,
  Grid,
  Divider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";
import FormCompany from "../components/FormCreateCompany";
import FormOffice from "../components/FormCreateOffice";
import CompaniesList from "../components/CompaniesList";

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

function OverViewPage() {
  const classes = useStyle();
  return (
    <div className="overview-section">
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={3}>
          <Grid container justify="space-evenly">
            <Grid className={classes.form} item xs="auto" sm={5} md={5}>
              <FormCompany />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs="auto" sm={5} md={5}>
              <FormOffice />
            </Grid>
          </Grid>
          <Divider className={classes.horisontalDivider} variant="middle" />
          <Grid container direction="column">
            <Grid item xs="auto" sm="auto" md="auto">
              <CompaniesList />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
export default OverViewPage;
