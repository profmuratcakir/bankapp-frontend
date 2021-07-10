import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";
import Login from "./login/Login";
import Register from "./register/Register";
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
