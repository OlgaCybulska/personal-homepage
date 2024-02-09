const colors = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
};
const common = {};

export const themeDark = {
  ...colors,
  ...common,
  bodyBackground: colors.mineShaft,
  sectionBackground: colors.white,
  buttonText: colors.white,
};

export const themeLight = {
  ...colors,
  ...common,
  bodyBackground: colors.whiteLilac,
  sectionBackground: colors.white,
  buttonText: colors.white,
};
