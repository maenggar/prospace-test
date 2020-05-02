import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  makeStyles,
  GridList,
  Typography,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { graphql } from "react-apollo";
import { getCompanyQuery } from "../queries/Queries";

const useStyle = makeStyles({
  cardStyle: {
    display: "block",
    width: "15em",
    height: "17em",
  },
  heading: {
    marginTop: "0.5em",
    marginLeft: "0.5em",
  },
  list: {
    marginTop: "0.2em",
  },
  cardContent: {
    lineHeight: "0.2",
  },
});

function CompaniesList(props) {
  const classes = useStyle();
  const displayData = () => {
    let data = props.data;
    if (data.loading) {
      return <h3>data stil loading</h3>;
    } else {
      return data.companies.map((companie) => {
        return (
          <div>
            <Grid item xs="auto" style={{ maxWidth: "15em", marginTop: "5em" }}>
              <Card variant="elevation" className={classes.cardStyle}>
                <CardHeader
                  titleTypographyProps={{ variant: "h6", align: "left" }}
                  title={companie.name}
                  action={
                    <IconButton aria-label="settings">
                      <DeleteForeverIcon />
                    </IconButton>
                  }
                />
                <Divider variant="middle" />
                <CardContent>
                  <Grid
                    container
                    className={classes.cardContent}
                    direction="column"
                    justify="flex-start"
                  >
                    <Grid item>
                      <Typography align="left">Address :</Typography>
                      <Typography variant="subtitle2" align="left">
                        {companie.address}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography align="left">Revenue :</Typography>
                      <Typography variant="subtitle2" align="left">
                        {companie.revenue}
                      </Typography>
                    </Grid>

                    <Typography align="left">Phone No:</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="subtitle2">
                          (+{companie.PhoneCode})
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {companie.PhoneNumber}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography className={classes.heading} variant="h4">
            Companies :
          </Typography>
        </Grid>
        <Grid item>
          <Divider variant="middle" />
        </Grid>
        <Grid item>
          <GridList className={classes.list} cellHeight={500} cols={3}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="stretch"
              style={{ flexGrow: 1 }}
            >
              {displayData()}
            </Grid>
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
}
export default graphql(getCompanyQuery)(CompaniesList);
