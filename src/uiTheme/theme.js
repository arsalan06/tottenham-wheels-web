import { createTheme } from "@mui/material";
// mui.d.ts
import "@mui/material/Typography";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EB3300", // your main brand color
      light: "#FF7043", // lighter shade for hover / highlights
      dark: "#B22A00", // darker shade for contrast
      contrastText: "#fff",
    },
    secondary: {
      main: "#EB3300", // also align secondary with brand
      light: "#FF7043",
      dark: "#B22A00",
      contrastText: "#fff",
    },
    // primary: {
    //   main: "#1976d2",
    //   light: "#42a5f5",
    //   dark: "#1565c0",
    // },
    // secondary: {
    //   main: "#dc004e",
    //   light: "#ff5983",
    //   dark: "#9a0036",
    // },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    page_title: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "28px",
      color: "#000",
    },
    title_text: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "20px",
      color: "#00",
    },
    colored_text: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "20px",
      color: "#EB3300",
    },
    normal_text: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "20px",
      color: "#00",
    },
    table_header: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "14px",
      color: "#333",
    },
    table_cell: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      color: "#555",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#161921",
          marginTop: "14px",
        },
        body: {
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "14px",
          color: "#555",
          //
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase
          borderRadius: "8px",
          fontFamily: "Poppins",
          fontWeight: 500,
          padding: "8px 20px",
        },
        containedPrimary: {
          backgroundColor: "#EB3300",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#EB3300",
          },
        },
        containedSecondary: {
          backgroundColor: "#EB3300",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#EB3300",
          },
        },
      },
    },
  },
});
