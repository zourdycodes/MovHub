import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as ROUTES from "../../constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) return history.push(ROUTES.HOME);
    if (value === 1) return history.push(ROUTES.MOVIES);
    if (value === 2) return history.push(ROUTES.SERIES);
    if (value === 3) return history.push(ROUTES.SEARCH);
  }, [value, history]);

  return (
    <>
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        value={value}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </>
  );
};
