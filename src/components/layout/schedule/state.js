import { useState } from "react";
import { icons } from "../../../shared";

export const useSchedule = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [userImage, setUserImage] = useState(
    icons.empty({ color: "A1A1A1", size: 140 })
  );

  return { selectedMenu, setSelectedMenu, userImage };
};
