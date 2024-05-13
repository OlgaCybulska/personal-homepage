const colors = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
  mainBlue: "#0366D6",
  dolphinGray: "#D1D5DA4D",
  semiGrey: "#D1D5DA1A",
  grey: "#6E7E91",
  semiDark: "#363636B8",
  darkBlue: "#2188FF",
};

const breakpoints = {
  mobile: "767px",
  tablet: "991px",
};

export const themeDark = {
  ...colors,
  ...breakpoints,
  bodyBackground: colors.mineShaft,
  sectionBackground: colors.white,
  buttonText: colors.white,
  mailText: colors.white,
  icons: colors.white,
  listDot: colors.mainBlue,
  underline: colors.semiGrey,
  text: colors.white,
  header: colors.white,
  border: colors.semiGrey,
  projectName: colors.white,
  link: colors.darkBlue,

  breakpoint: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
    narrow: breakpoints.narrow,
  },
};

export const themeLight = {
  ...colors,
  ...breakpoints,
  bodyBackground: colors.whiteLilac,
  sectionBackground: colors.white,
  buttonText: colors.white,
  mailText: colors.mineShaft,
  icons: colors.mineShaft,
  listDot: colors.mainBlue,
  underline: colors.dolphinGray,
  text: colors.grey,
  header: colors.mineShaft,
  border: colors.dolphinGray,
  projectName: colors.mainBlue,
  link: colors.mainBlue,

  breakpoint: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
    narrow: breakpoints.narrow,
  },
};
