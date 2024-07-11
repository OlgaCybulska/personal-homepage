const colors = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  black: "#252525",
  iron: "#E5E5E5",
  mainBlue: "#0366D6",
  mainBlue50: "#0366D680",
  dolphinGray: "#D1D5DA4D",
  dolphinGray20: "#0366D633",
  semiGrey: "#D1D5DA1A",
  grey: "#6E7E91",
  semiDark: "#363636B8",
  semiDark72: "#363636",
  darkBlue: "#2188FF",
  darkGray: "rgba(54, 54, 54, 0.72)",
  lightGray3: "#090A3308",
  lightGray2: "#090A3305",
  lightBlue: "#8CC2FF",
};

const breakpoints = {
  mobile: "767px",
  tablet: "991px",
};

export const themeDark = {
  colors: {
    body: { background: colors.black },
    section: { background: colors.semiDark72 },
    switchButton: { background: colors.darkGray, border: colors.white },
    button: {
      text: colors.white,
      background: colors.darkBlue,
      shadow: colors.lightBlue,
    },
    mail: { color: colors.white, hover: colors.darkBlue },
    icons: { color: colors.white, hover: colors.darkBlue },
    listDot: colors.mainBlue,
    underline: colors.semiGrey,
    text: colors.white,
    header: colors.white,
    border: { color: colors.semiGrey, hover: colors.mainBlue50 },
    projectName: colors.white,
    links: { color: colors.mainBlue, hover: colors.darkBlue },
    letstalk: colors.grey,
    aboutMe: colors.white,
    sun: colors.black,
    sunBox: colors.white,
    listItem: colors.white,
    boxShadow: colors.lightGray3,
    boxShadow2: colors.lightGray2,
    projectName: colors.white,
    errorText: colors.white,
    spinner: colors.darkBlue,
    githubeIcon: colors.darkBlue,
  },

  breakpoint: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
    narrow: breakpoints.narrow,
  },
};

export const themeLight = {
  colors: {
    body: { background: colors.whiteLilac },
    section: { background: colors.white },
    switchButton: { background: colors.iron, border: colors.darkGray },
    button: {
      text: colors.white,
      background: colors.mainBlue,
      shadow: colors.lightBlue,
    },
    mail: { color: colors.black, hover: colors.darkmainBlueBlue },
    icons: { color: colors.black, hover: colors.mainBlue },

    listDot: colors.mainBlue,
    underline: colors.dolphinGray,
    text: colors.grey,
    header: colors.black,
    border: { color: colors.dolphinGray, hover: colors.dolphinGray20 },
    projectName: colors.mainBlue,
    links: { color: colors.mainBlue, hover: colors.darkBlue },
    letstalk: colors.grey,
    aboutMe: colors.black,
    sun: colors.white,
    sunBox: colors.grey,
    listItem: colors.grey,
    boxShadow: colors.lightGray3,
    boxShadow2: colors.lightGray2,
    projectName: colors.mainBlue,
    errorText: colors.black,
    spinner: colors.mainBlue,
    githubeIcon: colors.mainBlue,
  },

  breakpoint: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
    narrow: breakpoints.narrow,
  },
};
