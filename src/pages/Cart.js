import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Your Cart</Typography>
            <List>
                {cart.length === 0 && <Typography>Your cart is empty.</Typography>}
                {cart.map((item, idx) => (
                    <ListItem key={idx} secondaryAction={
                        <Button color="error" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    }>
                        <ListItemText
                            primary={item.name}
                            secondary={`$${item.price}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6" sx={{ mt: 2 }}>Total: ${total.toFixed(2)}</Typography>
        </Box>
    );
}
export default Cart;
