import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TestApollo from "./components/TestApollo";
import SubmitForm from "./components/submitForm";

const client = new ApolloClient({
  uri: "http://127.0.0.1:5000/prospace",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TestApollo />
        <SubmitForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
