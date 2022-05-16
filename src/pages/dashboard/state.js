import { useState } from "react";

export const useDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return { activeIndex, setActiveIndex };
};
