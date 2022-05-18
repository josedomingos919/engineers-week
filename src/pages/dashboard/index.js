import "./styles.css";

import { useDashboard } from "./state";
import { menus } from "./util";

export const Dashboard = () => {
  const { activeIndex, setActiveIndex } = useDashboard();

  return (
    <div className="main-container-d">
      <div className="left-container-d">
        <ul className="list-menus">
          {menus.map(({ label, left, icon }, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              active={`${activeIndex === index}`}
              style={{ marginLeft: left }}
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-container-d">{menus[activeIndex].component}</div>
    </div>
  );
};
