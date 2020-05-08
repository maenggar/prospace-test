import React, { useState } from "react";
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
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getCompanyQuery, deleteCompany } from "../queries/Queries";

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
  // handel card hover
  let [raisedCard, setRaisedCard] = useState(false);

  const handleRaised = () => {
    setRaisedCard(!raisedCard);
  };
  const classes = useStyle();
  const displayData = () => {
    console.log(props, "find mutate props");

    let deleteCompanyMutation = (id) => {
      return props.deleteCompany({
        variables: {
          companyId: id,
        },
      });
    };

    let data = props.getCompanyQuery;

    if (data.loading) {
      return <h3>data stil loading</h3>;
    } else {
      return data.companies.map((companie) => {
        return (
          <div key={companie.id}>
            <Grid item xs="auto" style={{ maxWidth: "15em", marginTop: "5em" }}>
              <Card
                onMouseOver={() => {
                  handleRaised();
                }}
                onMouseOut={() => {
                  handleRaised();
                }}
                raised={raisedCard}
                variant="elevation"
                className={classes.cardStyle}
                key={companie.id}
              >
                <CardHeader
                  titleTypographyProps={{ variant: "h6", align: "left" }}
                  title={companie.name}
                  action={
                    <IconButton
                      aria-label="settings"
                      onClick={() => {
                        deleteCompanyMutation(companie.id);
                      }}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  }
                />
                <Divider variant="middle" />
                <Link
                  underline="none"
                  component={RouterLink}
                  to={`/officepage/${companie.id}`}
                >
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
                </Link>
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
export default compose(
  graphql(getCompanyQuery, { name: "getCompanyQuery" }),
  graphql(deleteCompany, { name: "deleteCompany" })
)(CompaniesList);
