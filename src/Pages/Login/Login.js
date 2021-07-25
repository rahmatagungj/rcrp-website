import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";

function Login(props) {
  return (
    <div>
      <Seo title={"Republic City - Masuk"} />
      Login
      <br />
      <Link to="/beranda">Beranda</Link>
    </div>
  );
}

export default Login;
