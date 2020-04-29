const express = require("express");

//initialitation
const app = express();

// graphql endpoint
app.use(
  "/prospace",
  graphqlHttp({
    schema: schema,
    graphiql: true,
  })
);

//connection database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connecting with database");
});

//port listening
app.listen(5000, () => {
  console.log("Server running On Port:5000");
});
