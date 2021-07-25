import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";

function Dashboard(props) {
  return (
    <div>
      <Seo title={"Republic City - Beranda"} />
      Beranda
      <br />
      <Link to="/">Landing Page</Link>
    </div>
  );
}

export default Dashboard;
