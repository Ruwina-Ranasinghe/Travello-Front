// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF", // white
    10: "#F5F5F5", // slightly darker background grey for better contrast
    50: "#EAEAEA",
    100: "#DADADA", // a bit darker grey for borders or lighter components
    200: "#B8B8B8",
    300: "#9A9A9A",
    400: "#6D6D6D",
    500: "#4A4A4A",
    600: "#3B3B3B",
    700: "#2C2C2C",
    800: "#1C1C1C",
    900: "#0A0A0A", // near-black
  },
  
  primary: {
    50: "#E0F7FA", // light cyan blue
    100: "#B2EBF2",
    200: "#80DEEA", // soft sky blue
    300: "#4DD0E1",
    400: "#26C6DA", // vibrant turquoise
    500: "#00BCD4", // strong cyan blue
    600: "#00ACC1",
    700: "#0097A7", // deep cyan blue
    800: "#00838F",
    900: "#006064", // very deep cyan blue
  },
  
  };
  
 // mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[100], // light grey for better contrast
            },
            background: {
              default: colorTokens.grey[10], // light background grey
              alt: colorTokens.grey[0], // white for contrast
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
