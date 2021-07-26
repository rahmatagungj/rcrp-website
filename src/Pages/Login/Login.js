import React from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Seo from "../../Components/Seo/Seo";
import { useHistory } from "react-router-dom";
import "./Login.scss";

function Login(props) {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/beranda");
  };

  return (
    <div>
      <Seo title={"Republic City - Masuk"} />
      <div className="bg-login">
        {/* card */}
        <div className="p-d-flex p-jc-center">
          <Card
            title="Masuk"
            subTitle="Sudah punya akun? Masukkan akun anda."
            className="vertical-center p-shadow-5"
          >
            {/* username */}
            <div className="p-fluid">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  placeholder="Username"
                  name="name"
                  id="name"
                  type="name"
                />
              </div>
            </div>
            {/* username end */}

            {/* password */}
            <div className="p-fluid">
              <div className="p-inputgroup p-mt-2 p-mb-2">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-lock"></i>
                </span>
                <InputText
                  placeholder="Password"
                  name="password"
                  id="password"
                  type="password"
                />
              </div>
            </div>
            {/* password end */}

            {/* button */}
            <div className="p-fluid">
              <Button
                label="Masuk"
                className="p-button-success"
                onClick={handleLogin}
              />
            </div>
            {/* button end */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
