import React from "react";
import Seo from "../../Components/Seo/Seo";
import "./Dashboard.scss";
import { Card } from "primereact/card";
import MenuBar from "./Components/MenuBar";
import Spinner from "../../Components/Spinner/Spinner";

const { useEffect, useState } = React;

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    }
  }, []);

  const RenderLoading = () => {
    return <Spinner />;
  };

  return (
    <div>
      <MenuBar />
      <Seo title={"Republic City - Beranda"} />
      {isLoaded ? (
        <div className="p-grid nested-grid p-m-2">
          <div className="p-col-12 p-md-8 p-lg-8">
            <div className="p-grid">
              <div className="p-col">
                <Card title="90" subTitle="Jam Bermain" />
              </div>
              <div className="p-col">
                <Card title="2" subTitle="Total Karakter" />
              </div>
              <div className="p-col">
                <Card title="Title" subTitle="SubTitle" />
              </div>
              <div className="p-col-12">
                <Card title="Title" subTitle="SubTitle">
                  Content
                </Card>
              </div>
            </div>
          </div>
          <div className="p-col-12 p-md-4 p-lg-4">
            <div className="p-grid">
              <div className="p-col">
                <Card title="90" subTitle="Jam Bermain" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RenderLoading />
      )}
    </div>
  );
}

export default Dashboard;
