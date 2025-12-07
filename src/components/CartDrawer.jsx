import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Divider,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import { Close, Add, Remove, Delete, ShoppingCart } from "@mui/icons-material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();
  const navigate = useNavigate();
  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };
  const handleCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleCart}
      sx={{
        "& .MuiDrawer-paper": {
          width: 400,
          maxWidth: "90vw",
        },
      }}
    >
      <Box
        sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <ShoppingCart />
            Shopping Cart ({items.length})
          </Typography>
          <IconButton onClick={toggleCart}>
            <Close />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Cart Items */}
        {items.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ShoppingCart
              sx={{ fontSize: 64, color: "text.secondary", mb: 2 }}
            />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add some products to get started!
            </Typography>
          </Box>
        ) : (
          <>
            <Box sx={{ flex: 1, overflow: "auto" }}>
              <List>
                {items.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemAvatar>
                        <Avatar
                          src={item.images[0]}
                          alt={item.name}
                          variant="rounded"
                          sx={{ width: 60, height: 60, mr: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box>
                            <Typography variant="subtitle2" noWrap>
                              {item.name
                                ? item.name
                                : item.type
                                ? item.type
                                : item.sku}
                            </Typography>
                            {item.size && (
                              <Chip
                                label={item.size}
                                size="small"
                                variant="outlined"
                                sx={{ mt: 0.5 }}
                              />
                            )}
                          </Box>
                        }
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Typography
                              variant="h6"
                              color="primary"
                              component="span"
                            >
                              £{item.price}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mt: 1,
                              }}
                            >
                              <IconButton
                                size="small"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    -1
                                  )
                                }
                                sx={{
                                  bgcolor: "grey.100",
                                  "&:hover": { bgcolor: "grey.200" },
                                }}
                              >
                                <Remove fontSize="small" />
                              </IconButton>
                              <Typography
                                variant="body2"
                                sx={{ minWidth: 20, textAlign: "center" }}
                              >
                                {item.quantity}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    1
                                  )
                                }
                                sx={{
                                  bgcolor: "grey.100",
                                  "&:hover": { bgcolor: "grey.200" },
                                }}
                              >
                                <Add fontSize="small" />
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={() => removeFromCart(item.id)}
                                sx={{
                                  color: "error.main",
                                  ml: "auto",
                                }}
                              >
                                <Delete fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < items.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>

            {/* Footer */}
            <Box sx={{ pt: 2 }}>
              <Card sx={{ bgcolor: "grey.50" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6">
                      Total: £{getTotalPrice().toFixed(2)}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={clearCart}
                      startIcon={<Delete />}
                    >
                      Clear All
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleCheckout}
                    sx={{
                      bgcolor: "#EB3300",
                      "&:hover": { bgcolor: "#d12d00" },
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
