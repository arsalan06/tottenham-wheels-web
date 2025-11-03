import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
  Rating,
  IconButton,
  Paper
} from '@mui/material';
import {
  ShoppingCart,
  Visibility,
  Star
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  size,
  speedRating,
  fuelEfficiency,
  inStock,
  isPopular = false
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      brand,
      price,
      image,
      size,
      inStock
    });
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
      onClick={handleViewDetails}
    >
      {/* Image Container */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height={200}
          image={image}
          alt={name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        
        {/* Badges */}
        <Box sx={{ position: 'absolute', top: 8, left: 8, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {isPopular && (
            <Chip
              label="Popular"
              size="small"
              sx={{ bgcolor: '#EB3300', color: 'white' }}
            />
          )}
          {discount > 0 && (
            <Chip
              label={`-${discount}%`}
              size="small"
              sx={{ bgcolor: 'success.main', color: 'white' }}
            />
          )}
        </Box>

        {/* Stock Status */}
        <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Chip
            label={inStock ? 'In Stock' : 'Out of Stock'}
            size="small"
            color={inStock ? 'success' : 'error'}
          />
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Brand & Name */}
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {brand}
        </Typography>
        <Typography 
          variant="h6" 
          component="h3"
          gutterBottom
          sx={{ 
            fontWeight: 600,
            lineHeight: 1.2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {name}
        </Typography>

        {/* Tyre Specs */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip label={size} size="small" variant="outlined" />
          <Chip label={speedRating} size="small" variant="outlined" />
          <Chip label={fuelEfficiency} size="small" variant="outlined" />
        </Box>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Rating value={rating} readOnly size="small" precision={0.1} />
          <Typography variant="body2" color="text.secondary">
            {rating} ({reviews})
          </Typography>
        </Box>

        {/* Pricing */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography variant="h5" component="p" sx={{ color: '#EB3300', fontWeight: 'bold' }}>
              £{price}
            </Typography>
            {originalPrice && (
              <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                £{originalPrice}
              </Typography>
            )}
          </Box>
          <Typography variant="caption" color="text.secondary">
            Per tyre
          </Typography>
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            variant="contained"
            size="small"
            startIcon={<ShoppingCart />}
            onClick={handleAddToCart}
            disabled={!inStock}
            sx={{
              flex: 1,
              bgcolor: '#EB3300',
              '&:hover': { bgcolor: '#d12d00' }
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleViewDetails}
            sx={{ minWidth: 'auto', px: 2 }}
          >
            <Visibility />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;