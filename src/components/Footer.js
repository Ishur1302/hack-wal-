import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ textAlign: 'center', py: 3, mt: 4, background: '#0071ce', color: '#fff', borderRadius: 2 }}>
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Walmart Hackathon – Built with ❤️ for sustainability.
            </Typography>
        </Box>
    );
}
export default Footer;
