import { icons } from "../../../../shared";
import { colors } from "../../../../shared/colors";

export const List = () => {
  return (
    <div className="container-table">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <img src={icons.search({ color: colors.dark })} alt="User" />
        </span>
        <input
          type="text"
          class="form-control input-orange"
          placeholder="ex.: partida"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th className="table-text-center" scope="col">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-danger">
                  <img src={icons.delete({ color: colors.white })} alt="logo" />
                </button>
                <button type="button" class="btn btn-warning">
                  <img src={icons.edit({ color: colors.white })} alt="logo" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-danger">
                  <img src={icons.delete({ color: colors.white })} alt="logo" />
                </button>
                <button type="button" class="btn btn-warning">
                  <img src={icons.edit({ color: colors.white })} alt="logo" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>{" "}
            <td>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-danger">
                  <img src={icons.delete({ color: colors.white })} alt="logo" />
                </button>
                <button type="button" class="btn btn-warning">
                  <img src={icons.edit({ color: colors.white })} alt="logo" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <label>Total: 288</label>

      <div className="custom-pagination">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                {"<"}
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                {">"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
