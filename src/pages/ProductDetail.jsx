import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Chip,
  Card,
  CardContent,
  Rating,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import {
  ArrowBack,
  ShoppingCart,
  Star,
  LocalShipping,
  Security,
  Speed,
} from "@mui/icons-material";
import { useCart } from "../context/CartContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wheelsStock = [], tyresStock = [] } = useSelector(
    (state) => state.productStock
  );
  const location = useLocation();
  const type = location.state.type;
  const [product, setProduct] = React.useState(null);
  useEffect(() => {
    if (id) {
      if (type === "wheel") {
        const wheelDetail = wheelsStock.find((p) => p.id === id);
        setProduct(wheelDetail);
      } else {
        const tyreDetail = tyresStock.find((p) => p.id === id);
        setProduct(tyreDetail);
      }
    }
  }, [id]);
  const discount = product?.originalPrice
    ? Math.round(
        ((product?.originalPrice - product?.price) / product?.originalPrice) *
          100
      )
    : 0;

  const categoryDisplay = Array.isArray(product?.category)
    ? product?.category.join(", ")
    : product?.category;

  const mainImage =
    product?.images && product?.images.length > 0
      ? product?.images[0]
      : "/placeholder.svg";

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
      {/* <Navigation /> */}

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back to Products
        </Button>

        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item size={{ sm: 12, md: 6, lg: 6 }}>
            <Card>
              <Box sx={{ position: "relative", p: 3 }}>
                <img
                  src={mainImage}
                  alt={product?.name}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                    borderRadius: 8,
                  }}
                />
                {product?.quantity && parseInt(product?.quantity) > 0 ? (
                  <Chip
                    label="In Stock"
                    color="success"
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  />
                ) : (
                  <Chip
                    label="Out of Stock"
                    color="error"
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  />
                )}
                {/* {discount > 0 && (
                  <Chip
                    label={`-${discount}%`}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "#EB3300",
                      color: "white",
                    }}
                  />
                )} */}
              </Box>
            </Card>
          </Grid>

          {/* Product Details */}
          <Grid item size={{ sm: 12, md: 6, lg: 6 }}>
            <Box>
              {categoryDisplay && (
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {categoryDisplay}
                </Typography>
              )}
              <Typography variant="h4" component="h1" gutterBottom>
                {product?.name}
              </Typography>
              {product?.sku && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  SKU: {product?.sku}
                </Typography>
              )}

              {/* Price */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{ color: "#EB3300" }}
                >
                  £{product?.price}
                </Typography>
              </Box>

              {/* Specifications */}
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Specifications
                  </Typography>
                  <Grid container spacing={2}>
                    {product?.wheelSize && (
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Wheel Size
                        </Typography>
                        <Typography variant="body1">
                          {product?.wheelSize}"
                        </Typography>
                      </Grid>
                    )}
                    {product?.material && (
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Material
                        </Typography>
                        <Typography variant="body1">
                          {product?.material}
                        </Typography>
                      </Grid>
                    )}
                    {product?.color && (
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Color
                        </Typography>
                        <Typography variant="body1">
                          {product?.color}
                        </Typography>
                      </Grid>
                    )}
                    {product?.quantity && (
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          Quantity Available
                        </Typography>
                        <Typography variant="body1">
                          {product?.quantity}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>

                  {product?.fitment && product?.fitment.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        Fitment
                      </Typography>
                      {product?.fitment.map((fit, index) => (
                        <Chip
                          key={index}
                          label={fit}
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>

              {/* Add to Cart */}
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={handleAddToCart}
                disabled={
                  !product?.quantity || parseInt(product?.quantity) === 0
                }
                sx={{
                  bgcolor: "#EB3300",
                  "&:hover": { bgcolor: "#d12d00" },
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  mb: 3,
                  width: "100%",
                }}
              >
                Add to Cart
              </Button>

              {/* Benefits */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Chip
                  icon={<LocalShipping />}
                  label="Free Delivery"
                  variant="outlined"
                />
                <Chip
                  icon={<Security />}
                  label="2 Year Warranty"
                  variant="outlined"
                />
                <Chip
                  icon={<Speed />}
                  label="Fast Fitting"
                  variant="outlined"
                />
              </Box>
            </Box>
          </Grid>

          {/* product? Description */}
          {product?.description && (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Product Details
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {product?.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Compatible Models */}
          {product?.models && product?.models.length > 0 && (
            <Grid item size={{ sm: 12, md: 12, lg: 12 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Compatible Models
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      maxHeight: "300px",
                      overflowY: "auto",
                    }}
                  >
                    {product?.models.map((model, index) => (
                      <Chip
                        key={index}
                        label={model}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}

          {/* Compatible Years */}
          {product?.years && product?.years.length > 0 && (
            <Grid item size={{ sm: 12, md: 12, lg: 12 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Compatible Years
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      maxHeight: "300px",
                      overflowY: "auto",
                    }}
                  >
                    {product?.years.map((year, index) => (
                      <Chip
                        key={index}
                        label={year}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default ProductDetail;
