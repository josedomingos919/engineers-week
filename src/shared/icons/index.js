const defaultProps = {
  color: "0000",
  size: 24,
};

export const icons = {
  user: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/user--v1.png`,
  password: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/password--v1.png`,
  enter: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/enter-2.png`,
  off: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/shutdown--v1.png`,
  error: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/door-sensor-error.png`,
  people: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/gold-medal.png`,
  schedule: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/timetable.png`,
  list: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/table-of-content.png`,
  empty: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/image.png`,
  activity: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/under-computer.png`,
  date: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/calendar-13.png`,
  location: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/address.png`,
  description: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/create-new.png`,
  search: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/search--v1.png`,
  delete: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/filled-trash.png`,
  edit: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/edit--v1.png`,
  save: ({ color = defaultProps.color, size = defaultProps.size }) =>
    `https://img.icons8.com/ios-glyphs/${size}/${color}/save--v1.png`,
};
