import { Card, CardContent, Divider, Typography, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";

const OrderSummary = ({ items, subtotal, shipping, total }) => {
  return (
    <Card sx={{ position: "sticky", top: 20 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }}>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {item.name} × {item.quantity}
              </Typography>
              <Typography variant="body2">
                £{(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal</Typography>
          <Typography>£{subtotal.toFixed(2)}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Shipping</Typography>
          <Typography color={shipping === 0 ? "success.main" : "text.primary"}>
            {shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}
          </Typography>
        </Box>

        {shipping > 0 && (
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            sx={{ mb: 2 }}
          >
            Free shipping on orders over £200
          </Typography>
        )}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6" color="primary">
            £{total.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ mt: 3, p: 2, bgcolor: "grey.100", borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <LockIcon fontSize="small" color="success" />
            <Typography variant="body2" fontWeight="bold">
              Secure Checkout
            </Typography>
          </Box>

          <Typography variant="caption" color="text.secondary">
            Your payment information is encrypted and secure
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
