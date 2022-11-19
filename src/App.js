import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";

import Checkin from "./Views/Checkin";
import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Profile from "./Views/Profile";

const checkins = [
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 15,
  },
  { date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8 },
  { date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2 },
  {
    date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 12,
  },
  {
    date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 19,
  },
  {
    date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 10,
  },
  {
    date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 15,
  },
  { date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6 },
  {
    date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
  {
    date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    setMenuOpen(!menuOpen);
  };

  const handleOuterWrapperClick = (e) => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/join" && (
          <Header onClick={handleClick} open={menuOpen} />
        )}
        <GlobalStyles />
        <div
          onClick={handleOuterWrapperClick}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Switch>
            <Route exact path="/">
              <Dash checkins={checkins} />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/checkin">
              <Checkin />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
