import { icons } from "../../../../shared";
import { colors } from "../../../../shared/colors";
import { useSchedule } from "../state";

export const Form = () => {
  const { userImage } = useSchedule();

  return (
    <>
      <div className="container-form">
        <label class="form-label">Nome da equipe*</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img src={icons.activity({ color: colors.dark })} alt="User" />
          </span>
          <input
            type="text"
            class="form-control input-orange"
            placeholder="ex.: Os BP5..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <label class="form-label">Classificação*</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img src={icons.location({ color: colors.dark })} alt="User" />
          </span>
          <input
            type="text"
            class="form-control input-orange"
            placeholder="ex.: Vencedor..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <label class="form-label">Membros*</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img src={icons.description({ color: colors.dark })} alt="User" />
          </span>
          <textarea
            placeholder="ex.: José Ndonge, Kwenda Mayeye..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            class="form-control input-orange"
            rows="3"
          ></textarea>
        </div>
        <div class="footer-button">
          <button type="button" class="btn btn-secondary image-icon">
            <img src={icons.delete({ color: colors.white })} alt="User" />
            Cancelar
          </button>
          <button className="btn btn-yellow image-icon">
            <img src={icons.save({ color: colors.white })} alt="User" />
            Salvar
          </button>
        </div>
      </div>
    </>
  );
};
