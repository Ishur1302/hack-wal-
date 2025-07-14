import { Box, Typography } from "@mui/material";
import SupportBot from "../components/SupportBot";

export default function Support() {
    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Customer Support
            </Typography>
            <SupportBot />
        </Box>
    );
}
