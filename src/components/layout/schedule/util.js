import { icons } from "../../../shared";
import { colors } from "../../../shared/colors";
import { Form } from "./form";
import { List } from "./list";

export const menus = [
  {
    label: "Agendar Evento",
    form: <Form />,
    activeIcon: (
      <img
        className="image-icons-menu"
        src={icons.schedule({ color: colors.orange, size: 20 })}
        alt="auto"
      />
    ),
    normalIcon: (
      <img
        className="image-icons-menu"
        src={icons.schedule({ color: colors.dark, size: 20 })}
        alt="auto"
      />
    ),
  },
  {
    label: "Listar Agendamentos",
    form: <List />,
    activeIcon: (
      <img
        className="image-icons-menu"
        src={icons.list({ color: colors.orange, size: 20 })}
        alt="auto"
      />
    ),
    normalIcon: (
      <img
        className="image-icons-menu"
        src={icons.list({ color: colors.dark, size: 20 })}
        alt="auto"
      />
    ),
  },
];
