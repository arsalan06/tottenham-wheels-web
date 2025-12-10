import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {
  ArrowBack,
  LocalShipping,
  CheckCircle,
  Schedule,
  Cancel,
  Inventory,
  Payment,
} from "@mui/icons-material";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Mock orders data (same as Orders page)
const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 459.99,
    shippingAddress: "123 Main Street, London, SW1A 1AA",
    paymentMethod: "Visa ending in 4242",
    items: [
      { name: "Michelin Pilot Sport 4", quantity: 4, price: 99.99 },
      { name: "Valve Stems Set", quantity: 1, price: 12.99 },
    ],
  },
  {
    id: "ORD-002",
    date: "2024-01-20",
    status: "shipped",
    total: 289.99,
    shippingAddress: "456 High Street, Manchester, M1 1AA",
    paymentMethod: "Mastercard ending in 5555",
    items: [
      { name: "Continental PremiumContact 6", quantity: 2, price: 129.99 },
      { name: "Tyre Pressure Gauge", quantity: 1, price: 29.99 },
    ],
  },
  {
    id: "ORD-003",
    date: "2024-01-25",
    status: "processing",
    total: 599.99,
    shippingAddress: "789 Park Lane, Birmingham, B1 1AA",
    paymentMethod: "PayPal",
    items: [{ name: "Pirelli P Zero", quantity: 4, price: 149.99 }],
  },
  {
    id: "ORD-004",
    date: "2024-01-28",
    status: "pending",
    total: 199.99,
    shippingAddress: "321 Queen Street, Edinburgh, EH1 1AA",
    paymentMethod: "Visa ending in 1234",
    items: [
      { name: "Bridgestone Turanza", quantity: 2, price: 89.99 },
      { name: "Wheel Cleaner", quantity: 1, price: 19.99 },
    ],
  },
  {
    id: "ORD-005",
    date: "2024-01-10",
    status: "cancelled",
    total: 349.99,
    shippingAddress: "654 River Road, Glasgow, G1 1AA",
    paymentMethod: "Amex ending in 3782",
    items: [{ name: "Goodyear Eagle F1", quantity: 2, price: 174.99 }],
  },
];

const statusConfig = {
  pending: { label: "Pending", color: "warning", icon: Schedule, step: 0 },
  processing: { label: "Processing", color: "info", icon: Inventory, step: 1 },
  shipped: { label: "Shipped", color: "primary", icon: LocalShipping, step: 2 },
  delivered: {
    label: "Delivered",
    color: "success",
    icon: CheckCircle,
    step: 3,
  },
  cancelled: { label: "Cancelled", color: "error", icon: Cancel, step: -1 },
};

const orderSteps = ["Order Placed", "Processing", "Shipped", "Delivered"];

const OrderDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  const order = mockOrders.find((o) => o.id === id);
  const currentStatus = orderStatus || order?.status;

  if (!order) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
        <Navigation />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: "center", py: 6 }}>
              <Typography variant="h5" gutterBottom>
                Order Not Found
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                The order you're looking for doesn't exist.
              </Typography>
              <Button variant="contained" onClick={() => navigate("/orders")}>
                Back to Orders
              </Button>
            </CardContent>
          </Card>
        </Container>
        <Footer />
      </Box>
    );
  }

  const config = statusConfig[currentStatus];
  const StatusIcon = config.icon;
  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;

  const handleCancelOrder = () => {
    setOrderStatus("cancelled");
    setCancelDialogOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", mt: 14 }}>
      <Navigation isBg={true} />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/orders")}
            sx={{ color: "text.secondary" }}
          >
            Back to Orders
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Order {order.id}
            </Typography>
            <Typography color="text.secondary">
              Placed on{" "}
              {new Date(order.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </Box>
          <Chip
            icon={<StatusIcon sx={{ fontSize: 18 }} />}
            label={config.label}
            color={config.color}
            sx={{ fontWeight: 600, fontSize: "0.9rem", py: 2, px: 1 }}
          />
        </Box>

        {/* Order Progress */}
        {currentStatus !== "cancelled" && (
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ py: 4 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Order Progress
              </Typography>
              <Stepper activeStep={config.step} alternativeLabel sx={{ mt: 3 }}>
                {orderSteps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>
        )}

        {/* Cancelled Notice */}
        {currentStatus === "cancelled" && (
          <Card sx={{ mb: 3, bgcolor: "error.light" }}>
            <CardContent sx={{ py: 3, textAlign: "center" }}>
              <Cancel sx={{ fontSize: 40, color: "error.dark", mb: 1 }} />
              <Typography variant="h6" fontWeight={600} color="error.dark">
                This order has been cancelled
              </Typography>
              <Typography color="error.dark" sx={{ opacity: 0.8 }}>
                A refund will be processed within 5-7 business days.
              </Typography>
            </CardContent>
          </Card>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 3,
          }}
        >
          {/* Order Items */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Order Items
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 600 }}>
                        Qty
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600 }}>
                        Price
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600 }}>
                        Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell align="center">{item.quantity}</TableCell>
                        <TableCell align="right">
                          £{item.price.toFixed(2)}
                        </TableCell>
                        <TableCell align="right">
                          £{(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Typography>Subtotal:</Typography>
                  <Typography>£{subtotal.toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Typography>Shipping:</Typography>
                  <Typography>
                    {shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Typography fontWeight={600}>Total:</Typography>
                  <Typography fontWeight={600}>
                    £{order.total.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Order Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Card>
              <CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <LocalShipping color="primary" />
                  <Typography variant="h6" fontWeight={600}>
                    Shipping Address
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {order.shippingAddress}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Payment color="primary" />
                  <Typography variant="h6" fontWeight={600}>
                    Payment Method
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {order.paymentMethod}
                </Typography>
              </CardContent>
            </Card>

            {(currentStatus === "pending" ||
              currentStatus === "processing") && (
              <Button
                variant="outlined"
                color="error"
                fullWidth
                onClick={() => setCancelDialogOpen(true)}
              >
                Cancel Order
              </Button>
            )}
          </Box>
        </Box>
      </Container>

      {/* Cancel Confirmation Dialog */}
      <Dialog
        open={cancelDialogOpen}
        onClose={() => setCancelDialogOpen(false)}
      >
        <DialogTitle>Cancel Order?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to cancel order {order.id}? This action cannot
            be undone. A refund will be processed within 5-7 business days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCancelDialogOpen(false)}>Keep Order</Button>
          <Button onClick={handleCancelOrder} color="error" variant="contained">
            Yes, Cancel Order
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default OrderDetail;
