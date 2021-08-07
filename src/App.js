import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Login from "./login/Login";
import Register from "./register/Register";
import User from "./user/User";
import Logout from "./logout/Logout";
import Deposit from "./deposit/Deposit";
import Withdraw from "./withdraw/Withdraw";
import AddRecipient from "./transfer/AddRecipient";
import Transfer from "./transfer/Transfer";
import Admin from "./admin/Admin";
import UserMgmt from "./admin/UserMgmt";
import Product from "./product/Product";
import Price from "./price/Price";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/price">
            <Price />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/userMgmt">
            <UserMgmt />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/deposit">
            <Deposit />
          </Route>
          <Route path="/withdraw">
            <Withdraw />
          </Route>
          <Route path="/recipient">
            <AddRecipient />
          </Route>
          <Route path="/transfer">
            <Transfer />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
