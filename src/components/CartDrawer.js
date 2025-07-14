import { Drawer, Box, Typography, List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CartDrawer({ open, onClose, cart, removeFromCart, onCheckout }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 340, p: 3 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                    Your Cart
                </Typography>
                <List>
                    {cart.length === 0 && <Typography sx={{ mt: 2 }}>Cart is empty.</Typography>}
                    {cart.map((item, idx) => (
                        <ListItem
                            key={idx}
                            secondaryAction={
                                <IconButton edge="end" color="error" onClick={() => removeFromCart(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={item.name}
                                secondary={`$${item.price.toFixed(2)}`}
                            />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Total: ${total.toFixed(2)}
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={onCheckout}
                    disabled={cart.length === 0}
                >
                    Checkout
                </Button>
            </Box>
        </Drawer>
    );
}
export default CartDrawer;
