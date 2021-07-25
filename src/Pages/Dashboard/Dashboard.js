import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

function Dashboard(props) {
  const items = [
    {
      label: "1",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "1.1",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "1.2",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "1.3",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="p-mr-2"
    />
  );
  const end = <InputText placeholder="Search" type="text" />;

  return (
    <div>
      <Menubar model={items} start={start} end={end} />
      <Seo title={"Republic City - Beranda"} />
      Beranda
      <br />
      <Link to="/">Landing Page</Link>
    </div>
  );
}

export default Dashboard;
