import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/masuk">
          <Login />
        </Route>
        <Route path="/beranda">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
