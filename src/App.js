import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrimeReact from "primereact/api";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Profile from "./Pages/Dashboard/Pages/Profile/Profile";
import ProfileSetting from "./Pages/Dashboard/Pages/Profile/ProfileSetting";
import Events from "./Pages/Dashboard/Pages/Events/Events";

PrimeReact.ripple = true;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact components={Home} />
        <Route path="/masuk" component={Login} />
        <Route path="/beranda" exact component={Dashboard} />
        <Route path="/beranda/profil" component={Profile} exact />
        <Route path="/beranda/profil/pengaturan" component={ProfileSetting} />
        <Route path="/beranda/kegiatan" component={Events} exact />
      </Switch>
    </Router>
  );
}

export default App;
