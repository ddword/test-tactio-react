import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app, material-ui
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: "#dc004e",
      },
      background: {
        default: '#fff',
      },
    },
});

export default theme;