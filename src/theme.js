import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#0071ce' }, // Walmart blue
        secondary: { main: '#ffd600' }, // Walmart yellow
        background: { default: '#f5f6fa' },
    },
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
});

export default theme;
