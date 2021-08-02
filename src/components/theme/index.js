import { typographyVariants } from "./TypographyVariants";

const colors = {
  background: {
    light: {
      color: "#FFFFFF",
    },
    main: {
      color: "#F2F2F2",
    },
  },
  borders: {
    main: {
      color: "#F1F1F1",
    },
  },
  primary: {
    main: {
      color: "#D7385E",
      contrastText: "#fff",
    },
  },
  secondary: {
    main: {
      color: "#FB7B6B",
      contrastText: "#fff",
    },
  },
  tertiary: {
    main: {
      color: "#070C0E",
      contrastText: "#fff",
    },
    light: {
      color: "#88989E",
      contrastText: "#fff",
    },
  },
  modes: {
    dark: {},
  },
};

const darkColors = {
  background: {
    main: {
      color: "#030506",
    },
  },
  borders: {
    main: {
      color: "#181F22",
    },
  },
  primary: {
    main: {
      color: "#F27895",
      contrastText: "#fff",
    },
  },
  secondary: {
    main: {
      color: "#FFA59A",
      contrastText: "#fff",
    },
  },
  tertiary: {
    main: {
      color: "#D5D5D5",
    },
    dark: {
      color: "#fff",
    },
  },
};

export default {
  colors,
  typographyVariants,
  fontFamily: "'Rubik', sans-serif",
  borderRadius: "8px",
  transition: "200ms ease-in-out",
};
