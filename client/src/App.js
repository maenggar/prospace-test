import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OverViewPage from "./pages/OverViewPage";
import OfficePage from "./pages/OfficePage";

const client = new ApolloClient({
  uri: "http://127.0.0.1:5000/prospace",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={OverViewPage} />
            <Route exact path="/officepage" component={OfficePage} />
            <Route exact path="/officepage/:id" component={OfficePage} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
