import React from "react";
import { Header, Navigation } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./styles/App.css";
import * as ROUTES from "./constants/routes";
import { Trending } from "./pages";

const App = () => {
  return (
    <React.Suspense>
      <Router>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path={ROUTES.HOME} component={Trending} exact />
            </Switch>
          </Container>
        </div>
        <Navigation />
      </Router>
    </React.Suspense>
  );
};

export default App;
