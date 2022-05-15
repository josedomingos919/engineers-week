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
};
