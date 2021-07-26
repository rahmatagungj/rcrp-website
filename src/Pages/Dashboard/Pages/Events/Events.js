import React from "react";
import MenuBar from "../../Components/MenuBar";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import Foto1 from "./MUI.png"
import Foto2 from "./MUI.png"
import Foto3 from "./MUI.png"

function Events() {
  const header1 = <img alt="Foto-kegiatan" src={Foto1}/>;
  const header2 = <img alt="Foto-kegiatan" src={Foto2}/>;
  const header3 = <img alt="Foto-kegiatan" src={Foto3}/>;
  const footer = <span>
    <Button label="Ikuti Kegiatan" icon="pi pi-check" className="p-fluid"/>
    {/* <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/> */}
</span>;

  return (
    <div>
      <MenuBar />
      <h2 className="p-ml-4">Kegiatan Terdekat</h2>

      {/* event terdekat */}
      <div className="p-d-flex p-jc-center p-mt-4">
        <Card footer={footer} header={header1} className="p-shadow-3" className="p-mr-4">
          Kelas Roleplay
        </Card>
        <Card footer={footer} header={header2} className="p-shadow-3" className="p-mr-4">
          Balap Lari
        </Card>
        <Card footer={footer} header={header3} className="p-shadow-3" className="p-mr-4">
          Demo Turunkan Direktur DPDR
        </Card>
      </div>
      {/* event terdekat end */}

      <h2 className="p-ml-4">Kegiatan Sebelumnya</h2>

      {/* event sebelumnya */}
      <div className="p-d-flex p-jc-center p-mt-4">
        <Card footer={footer} header={header1} className="p-shadow-3" className="p-mr-4">
          Kelas Roleplay
        </Card>
        <Card footer={footer} header={header2} className="p-shadow-3" className="p-mr-4">
          Balap Lari
        </Card>
        <Card footer={footer} header={header3} className="p-shadow-3" className="p-mr-4">
          Demo Turunkan Direktur DPDR
        </Card>
      </div>
      {/* event sebelumnya end */}
    </div>
  );
}

export default Events;
