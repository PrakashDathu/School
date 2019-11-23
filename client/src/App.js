import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import "./App.css";
import * as PropTypes from "prop-types";
import Dashboard from "./views/Dashboard";
import {dTheme, lTheme} from "./theme";
import {Switch} from "react-router-dom";
import Login from "./views/Login/Login";
import { connect } from 'react-redux'
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
function App(props) {
  const [darkMode, setDarkMode] = React.useState(false);
  console.log(props);
  const toggleChecked = () => {
    setDarkMode(prev => !prev);
  };

  return (
      <div className="App">
        <ThemeProvider theme={darkMode ? dTheme : lTheme}>
          <Switch>
            <PrivateRoute
                isLoggedIn={props.auth.isAuthenticated}
                exact
                path="/dashboard"
                component={Dashboard}
                handleTheme={toggleChecked}
                isDarkMode={darkMode}
            />
            <PublicRoute
                isLoggedIn={props.auth.isAuthenticated}
                exact
                path="/login"
                component={Login}
                restricted={true}
                {...props}
            />
          </Switch>
        </ThemeProvider>
      </div>
  );
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  app: state.app,
});
export default connect(
    mapStateToProps,
    null
)(App);