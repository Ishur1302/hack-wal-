import { Box, Typography } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";

export default function Profile() {
    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Your Profile
            </Typography>
            <ProfileInfo />
        </Box>
    );
}
