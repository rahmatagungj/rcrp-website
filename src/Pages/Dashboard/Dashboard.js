import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import "./Dashboard.scss";
import { Card } from "primereact/card";

function Dashboard(props) {
  const items = [
    {
      label: "Akun",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Profil",
          icon: "pi pi-user-edit",
        },
        {
          separator: true,
        },
        {
          label: "Pengaturan",
          icon: "pi pi-cog",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
    },
    {
      label: "Kegiatan",
      icon: "pi pi-fw pi-calendar",
    },
  ];

  const start = <h3 className={"siteTitle"}>RCRP Panel Pengguna</h3>;
  const end = (
    <Link to="/">
      <Button
        label="Keluar"
        icon="pi pi-power-off"
        iconPos="left"
        className={"p-button-danger"}
      />
    </Link>
  );

  return (
    <div>
      <Menubar model={items} start={start} end={end} />
      <Seo title={"Republic City - Beranda"} />
      <div className="p-grid nested-grid p-m-2">
        <div className="p-col-12 p-md-8 p-lg-8">
          <div className="p-grid">
            <div className="p-col">
              <Card title="90" subTitle="Jam Bermain" />
            </div>
            <div className="p-col">
              <Card title="Title" subTitle="SubTitle" />
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
    </div>
  );
}

export default Dashboard;
