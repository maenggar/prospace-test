const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./schema");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//initialitation
const app = express();

app.use(cors());

// graphql endpoint
app.use(
  "/prospace",
  graphqlHttp({
    schema: schema,
    graphiql: true,
  })
);

//connection database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connecting with database");
  }
);

//port listening
app.listen(5000, () => {
  console.log("Server running On Port:5000");
});
