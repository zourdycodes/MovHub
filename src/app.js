import React from "react";
import { Header, Navigation } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./styles/App.css";
import * as ROUTES from "./constants/routes";
import { Trending, Search, Movies, Series } from "./pages";

// const Trending = React.lazy(() => import("./pages/trending"));
// const Search = React.lazy(() => import("./pages/search"));

const App = () => {
  return (
    <React.Suspense>
      <Router>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path={ROUTES.HOME} component={Trending} exact />
              <Route path={ROUTES.SEARCH} component={Search} />
              <Route path={ROUTES.MOVIES} component={Movies} />
              <Route path={ROUTES.SERIES} component={Series} />
            </Switch>
          </Container>
        </div>
        <Navigation />
      </Router>
    </React.Suspense>
  );
};

export default App;
