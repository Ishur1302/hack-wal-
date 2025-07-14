import { Box, Typography, Button } from '@mui/material';
import walmartLogo from '../assets/walmart-logo.png'; // adjust path if needed

function Banner() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(90deg, #0071ce 60%, #ffd600 100%)',
                color: '#fff',
                p: { xs: 3, md: 6 },
                borderRadius: 3,
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
            }}
        >
            <Box>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    Shop Smart. Shop Sustainable.
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Discover eco-friendly products for a better future.
                </Typography>
                <Button variant="contained" color="secondary" size="large">
                    Start Shopping
                </Button>
            </Box>
            <img
                src={walmartLogo}
                alt="Walmart"
                style={{ borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.1)', width: 200, height: 200, objectFit: 'contain', background: '#fff' }}
            />
        </Box>
    );
}
export default Banner;
