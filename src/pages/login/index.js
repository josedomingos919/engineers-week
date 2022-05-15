import "./style.css";
import LOGO from "./../../assets/img/logo.png";
import LOGO1 from "./../../assets/img/logo.jfif";
import { icons } from "./../../shared";
import { colors } from "../../shared/colors";

export const Login = () => {
  return (
    <div className="main-container">
      <div className="container-logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="box-login">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Utilizador
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img src={icons.user({ color: colors.orange })} alt="User" />
            </span>
            <input
              type="email"
              class="form-control input-orange"
              placeholder="ex.: teste@isptec.co.ao"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Palavra Passe
          </label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <img src={icons.password({ color: colors.orange })} alt="User" />
            </span>
            <input
              type="password"
              class="form-control input-orange"
              placeholder="ex.: angola.123"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="btn-footer">
          <button className="btn btn-yellow image-icon">
            <img src={icons.enter({ color: colors.white })} alt="User" />
            Entrar
          </button>
        </div>
      </div>

      <img className="img-background" src={LOGO1} alt="logo" />
    </div>
  );
};
