import { Box, Typography } from "@mui/material";
import OrderTracker from "../components/OrderTracker";

export default function Orders() {
    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Your Orders
            </Typography>
            <OrderTracker />
        </Box>
    );
}
