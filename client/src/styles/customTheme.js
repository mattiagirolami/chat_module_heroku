import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#54ff6b" : "#46ff40",
      },
      secondary: {
        main: darkMode ? "#d0ffce" : "#259300",
      },
    },
    overrides: {
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          fontSize: "0.95em",
        },
      },
      MuiTypography: {
        root: {
          wordWrap: "anywhere",
        },
      },
      MuiListItem: {
        root: {
          "&$selected": {
            borderRight: "5px solid #64f466",
          },
        },
      },
      MuiAvatar: {
        colorDefault: {
          backgroundColor: "#d3d3d3",
          color: "#46ff40",
        },
      },
      MuiSelect: {
        select: {
          "&:focus": {
            display: "flex",
            alignItems: "center",
          },
        },
        selectMenu: {
          display: "flex",
          alignItems: "center",
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
