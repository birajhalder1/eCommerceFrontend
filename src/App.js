import React from "react";
import { Route, Switch } from "react-router-dom"

import Home from "./components/Home/Home"
import Register from "./components/Layout/Register"
import About from "./components/Layout/About"
import Contact from "./components/Layout/Contact"
import Header from "./components/Layout/Header";
import Login from "./components/Layout/Login";
import EmailVerified from "./components/Layout/EmailVerified";
import CustomerProfile from "./components/Layout/CustomerProfile";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />

        <Route exact path="/email_verified" render={props => <EmailVerified {...props} />} />
        <Route exact path="/customer_profile" render={props => <CustomerProfile {...props} />} />

        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
      </Switch>
    </div>
  );
}
