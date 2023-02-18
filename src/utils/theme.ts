import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

type Theme = {
  type: string;
  mode: string;
  primaryColor: string;
  secondaryColor: string;
};

const themeStyle = require('../../content/data/style.json') as Theme;

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: (themeStyle.mode ?? 'light') as PaletteMode,
      primary: {
        main: themeStyle.primaryColor ?? '#1F2B9D',
      },
      secondary: {
        main: themeStyle.secondaryColor ?? '#F65458',
      },
      text: {
        primary: themeStyle.mode === 'dark' ? '#fff' : '#02001d',
        secondary: themeStyle.mode === 'dark' ? '#979797' : '#374151',
      },
    },
    typography: {
      h1: {
        fontWeight: 500,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 500,
      },
    },
  }),
);

export default theme;
