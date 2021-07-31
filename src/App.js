import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Login from "./login/Login";
import Register from "./register/Register";
import User from "./user/User";
import Logout from "./logout/Logout";
import Deposit from "./deposit/Deposit";
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/deposit">
            <Deposit />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
