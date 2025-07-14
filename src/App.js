import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
    const handleCheckout = () => {
        alert('Thank you for shopping sustainably!');
        setCart([]);
        setCartOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
            <Home addToCart={addToCart} />
            <CartDrawer
                open={cartOpen}
                onClose={() => setCartOpen(false)}
                cart={cart}
                removeFromCart={removeFromCart}
                onCheckout={handleCheckout}
            />
            <Footer />
        </ThemeProvider>
    );
}
export default App;
