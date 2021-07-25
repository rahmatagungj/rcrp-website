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

  const header = (
    <img alt="Card" src="https://pbs.twimg.com/media/DCNFIo9XsAEVtbX.jpg" />
  );
  const footer = (
    <span>
      <Button label="Buka" icon="pi pi-check" />
      <Button
        label="Tutup"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div>
      <Menubar model={items} start={start} end={end} />
      <Seo title={"Republic City - Beranda"} />
      <div className="p-grid nested-grid p-m-2">
        <div className="p-col-8">
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
        <div className="p-col-4">
          <Card
            title="Geng dan Warga"
            subTitle="Informasi Terbaru"
            style={{ width: "25em" }}
            footer={footer}
            header={header}
          >
            <p className="p-m-0" style={{ lineHeight: "1.5" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
