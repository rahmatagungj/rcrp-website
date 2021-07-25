import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";

function Home(props) {
  return (
    <div>
      <Seo title={"Republic City"} />
      Home
      <br />
      <Link to="/masuk">Masuk</Link>
    </div>
  );
}

export default Home;
