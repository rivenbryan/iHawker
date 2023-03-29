/**
 * Creates a MUI theme with custom palette and typography settings.
 *
 * @returns {object} The MUI theme.
 */
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
      primary: {
        main: '#FFC137',
      },
    },
    typography: {
      fontFamily: '"Inter"',
    },
  });

  export default Theme;
