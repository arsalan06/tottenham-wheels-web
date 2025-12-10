import { LocalShipping } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ClientDetails = ({ shippingDetails, setShippingDetails }) => {
  const handleShippingChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <LocalShipping color="primary" />
          <Typography variant="h6">Shipping Details</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={shippingDetails.firstName}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={shippingDetails.lastName}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={shippingDetails.email}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={shippingDetails.phone}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Address Line 1"
              placeholder="House number and street name"
              name="address"
              value={shippingDetails.address}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Address Line 2 (optional)"
              placeholder="Apartment, suite, unit, building, floor, etc. (optional)"
              name="address"
              value={shippingDetails.address}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Town / City"
              name="city"
              value={shippingDetails.city}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="State / County / Region (optional)"
              name="state"
              value={shippingDetails.city}
              onChange={handleShippingChange}
              required
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <TextField
              fullWidth
              label="Postcode"
              name="postcode"
              value={shippingDetails.postcode}
              onChange={handleShippingChange}
              required
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ClientDetails;
