import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#f50057',
    },
    bar: {
      main: '#4DB6AC'
    },
    mode: 'light'
  },
  components: {
    MuiCard: {
      elevation: 0,
      styleOverrides: {
        root: {
          elevation: 0,
          border: `1px solid`,
          borderColor: `#00796B`,
          borderRadius: 10,
          position: "relative",
          zIndex: 0,
        },
      },
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

