import { Header, Navigation } from "./components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./styles/App.css";
import React from "react";

const App = () => {
  return (
    <React.Suspense>
      <Router>
        <Header />
        <div className="app">
          <Container>
            <Switch></Switch>
          </Container>
        </div>
        <Navigation />
      </Router>
    </React.Suspense>
  );
};

export default App;
