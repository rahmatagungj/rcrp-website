import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

function Spinner() {
  return (
    <div className="p-jc-center p-mt-10">
      <center>
        <ProgressSpinner className={"p-mt-5"} />
      </center>
    </div>
  );
}

export default Spinner;
