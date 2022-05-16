import { useSchedule } from "./state";
import "./style.css";
import { menus } from "./util";

export const LayoutSchedule = () => {
  const { selectedMenu, setSelectedMenu, userImage } = useSchedule();

  return (
    <div className="main-form-container">
      <div className="form-box">
        <div className="form-header">
          <ul className="form-menu-steps">
            {menus.map(({ activeIcon, label, normalIcon }, index) => (
              <li
                active={selectedMenu === index ? "true" : "false"}
                onClick={() => setSelectedMenu(index)}
              >
                {selectedMenu === index ? activeIcon : normalIcon}
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="form-boday">{menus[selectedMenu].form}</div>
      </div>
    </div>
  );
};
