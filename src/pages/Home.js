import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import GeminiChat from '../components/GeminiChat'; // <-- Add this import!
import { Box, Grid } from '@mui/material';

function Home({ addToCart }) {
    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Banner />
            <GeminiChat /> {/* <-- Add this line to show the Gemini chat assistant */}
            <Grid container spacing={2} justifyContent="center">
                {products.map(product => (
                    <Grid item key={product.id}>
                        <ProductCard product={product} addToCart={addToCart} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default Home;
