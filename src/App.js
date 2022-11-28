import React, { useState, useEffect } from "react";
import useAuth from "./services/firebase/useAuth";
import useCheckin from "./services/firebase/useCheckin";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/globalStyles";
import Header from "./Components/Header";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";
import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Checkin from "./Views/Checkin";
import Profile from "./Views/Profile";
import Login from "./Views/Login";

function Protected({ authenticated, children, ...rest }) {
  debugger;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkins, setCheckins] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const app = initializeApp(firebaseConfig);

  const { isAuthenticated, createEmailUser, signInEmailUser, signUserOut } =
    useAuth();



  useEffect(() => {
    if (isAuthenticated) {
      history.push(history.location.state.from.pathname);
    }
    return;
  }, [isAuthenticated]);

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
        {location.pathname !== "/join" && location.pathname !== "/login" && (
          <Header onClick={handleClick} open={menuOpen} signOut={signUserOut} />
        )}
        <GlobalStyles />
        <div
          onClick={handleOuterWrapperClick}
          style={{
            width: "100vw",
            horizontalScroll: "none",
            overflowX: "hidden",
            height: "100vh",
          }}
        >
          <Switch>
            <Protected authenticated={isAuthenticated} exact path="/">
              <Dash />
            </Protected>
            <Route path="/join">
              <Join createEmailUser={createEmailUser} />
            </Route>
            <Route path="/login">
              <Login signInEmailUser={signInEmailUser} />
            </Route>
            <Protected authenticated={isAuthenticated} path="/profile">
              <Profile />
            </Protected>
            <Protected authenticated={isAuthenticated} exact path="/checkin">
              <Checkin />
            </Protected>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
