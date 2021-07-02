import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//warn => the base color from material-ui is black so in order to change to white we use dark-theme, applied by using theme-provider
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const CustomPagination = ({ setPage, numOfPages = 250 }) => {
  // Scroll to top when page changes
  // warn => page is defined by clicking the num of count pagination
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={({ target }) => handlePageChange(target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
          shape="rounded"
          // showFirstButton
          // showLastButton
        />
      </ThemeProvider>
    </div>
  );
};
