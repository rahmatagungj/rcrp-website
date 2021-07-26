import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

function MenuBar() {
  const history = useHistory();

  const navigateToPage = (path) => {
    history.push(path);
  };

  const items = [
    {
      label: "Akun",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Profile",
          icon: "pi pi-user-edit",
          command: () => navigateToPage("/beranda/profil"),
        },
        {
          separator: true,
        },
        {
          label: "Pengaturan",
          icon: "pi pi-cog",
          command: () => navigateToPage("/beranda/profil/pengaturan"),
        },
      ],
    },
    {
      label: "Kegiatan",
      icon: "pi pi-fw pi-calendar",
      command: () => navigateToPage("/beranda/kegiatan"),
    },
  ];

  const start = (
    <h3 className={"siteTitle"} onClick={() => navigateToPage("/beranda")}>
      RCRP Panel Pengguna
    </h3>
  );

  const end = (
    <Button
      label="Keluar"
      icon="pi pi-power-off"
      iconPos="left"
      className={"p-button-danger"}
      onClick={() => navigateToPage("/masuk")}
    />
  );

  return <Menubar model={items} start={start} end={end} />;
}

export default MenuBar;
