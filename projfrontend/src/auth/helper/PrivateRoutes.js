import React from "react";
import {Route, Redirect} from "react-router-dom";
import { isAutheticated} from "./index";



const PrivateRoute =({ component: component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={ props =>
            isAutheticated() ? (
            < component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };


  export default PrivateRoute;