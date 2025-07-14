import { Card, CardMedia, CardContent, Typography, Button, CardActions, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({ product, addToCart }) {
    return (
        <Card
            sx={{
                maxWidth: 280,
                m: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
                background: '#fff',
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', background: '#f9f9f9' }}
            />
            <CardContent>
                <Typography variant="h6" fontWeight={600}>{product.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40 }}>
                    {product.description}
                </Typography>
                <Rating value={product.rating} precision={0.1} readOnly size="small" sx={{ mb: 1 }} />
                <Typography variant="subtitle1" color="primary" fontWeight={700}>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    startIcon={<ShoppingCartIcon />}
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => addToCart(product)}
                    sx={{
                        fontWeight: 600,
                        transition: 'background 0.2s',
                        '&:hover': { backgroundColor: '#005fa3' },
                    }}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}
export default ProductCard;
