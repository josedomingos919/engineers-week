import { LayoutSchedule } from "../../components/layout/schedule";
import { icons } from "../../shared";
import { colors } from "../../shared/colors";

export const menus = [
  {
    label: "Agenda",
    left: 0,
    icon: (
      <img
        className="image-icons-menu"
        src={icons.schedule({ color: colors.orange, size: 30 })}
        alt="auto"
      />
    ),
    component: <LayoutSchedule />,
  },
  {
    label: "Maratona",
    left: 25,
    icon: (
      <img
        className="image-icons-menu"
        src={icons.people({ color: colors.orange, size: 30 })}
        alt="auto"
      />
    ),
  },
  {
    label: "Problema",
    left: 50,
    icon: (
      <img
        className="image-icons-menu"
        src={icons.error({ color: colors.orange, size: 30 })}
        alt="auto"
      />
    ),
  },
  {
    label: "Sair",
    left: 75,
    icon: (
      <img
        className="image-icons-menu"
        src={icons.off({ color: colors.orange, size: 30 })}
        alt="auto"
      />
    ),
  },
];
