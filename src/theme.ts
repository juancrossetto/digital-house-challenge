import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: "muli, sans-serif",
    body: "muli, cursive",
  },
  colors: {
    primary: {
      500: "#f52f41",
    },
    secondary: theme.colors.white,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "10px",
      },
    },
  },
});
