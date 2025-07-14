import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import walmartLogo from '../assets/walmart-logo.png'; // <-- import the logo

function Navbar({ cartCount, onCartClick }) {
    return (
        <AppBar position="sticky" color="primary" elevation={2}>
            <Toolbar>
                <img src={walmartLogo} alt="Walmart" style={{ height: 40, marginRight: 16 }} />
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                    Walmart Hackathon
                </Typography>
                <IconButton color="inherit" onClick={onCartClick} aria-label="cart">
                    <Badge badgeContent={cartCount} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
