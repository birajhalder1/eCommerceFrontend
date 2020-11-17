import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Layout/Register";
import About from "../Layout/About";
import Contact from "../Layout/Contact";

import Login from "../Layout/Login";
import EmailVerified from "../Layout/EmailVerified";
import CustomerProfile from "../Layout/CustomerProfile";
import PrivateRouteUser from "./PrivateRoute";

function MainRoute() {
  return (
    <div>
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
      </Switch>
      <Switch>
        <PrivateRouteUser
          exact
          path="/customer_profile"
          component={CustomerProfile}
          // render={(props) => <CustomerProfile {...props} />}
        />
      </Switch>
      <Switch>
        <PrivateRouteUser
          exact
          path="/email_verified"
          component={EmailVerified}
          // render={(props) => <EmailVerified {...props} />}
        />
      </Switch>

      <Route exact path="/about" render={(props) => <About {...props} />} />
      <Route exact path="/contact" render={(props) => <Contact {...props} />} />

      {/* <Route exact path="/cart" component={Cart} /> */}

      {/* <Switch>
        <PrivateRouteUser
          exact
          path="/payment-complete"
          component={OrderPlaced}
        />
      </Switch> */}
      {/* <Switch> */}
      {/* <PrivateRouteUser exact path="/myorder" component={MyOrder} />
        <PrivateRouteUser exact path="/checkout" component={Checkout} /> */}
      {/* </Switch> */}
    </div>
  );
}
export default MainRoute;
