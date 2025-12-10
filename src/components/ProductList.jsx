import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const ProductList = ({ items }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Review Your Order
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: 2,
              py: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Avatar
              src={item.image || item.images?.[0]}
              alt={item.name}
              variant="rounded"
              sx={{ width: 80, height: 80 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.brand} {item.name}
              </Typography>
              {item.size && (
                <Chip label={item.size} size="small" sx={{ mt: 0.5 }} />
              )}
              {item.color && (
                <Chip
                  label={item.color}
                  size="small"
                  sx={{ mt: 0.5, ml: 0.5 }}
                />
              )}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Quantity: {item.quantity}
              </Typography>
            </Box>
            <Typography variant="h6" color="primary">
              £{(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProductList;
