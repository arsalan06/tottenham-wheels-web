import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowBack,
  LocalShipping,
  CheckCircle,
  Schedule,
  Cancel,
  Visibility,
} from "@mui/icons-material";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Mock orders data
const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 459.99,
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
    items: [{ name: "Pirelli P Zero", quantity: 4, price: 149.99 }],
  },
  {
    id: "ORD-004",
    date: "2024-01-28",
    status: "pending",
    total: 199.99,
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
    items: [{ name: "Goodyear Eagle F1", quantity: 2, price: 174.99 }],
  },
];

const statusConfig = {
  pending: { label: "Pending", color: "warning", icon: Schedule },
  processing: { label: "Processing", color: "info", icon: Schedule },
  shipped: { label: "Shipped", color: "primary", icon: LocalShipping },
  delivered: { label: "Delivered", color: "success", icon: CheckCircle },
  cancelled: { label: "Cancelled", color: "error", icon: Cancel },
};

const Orders = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState("all");

  const filteredOrders =
    activeTab === "all"
      ? mockOrders
      : mockOrders.filter((order) => order.status === activeTab);

  const getStatusChip = (status) => {
    const config = statusConfig[status];
    const Icon = config.icon;
    return (
      <Chip
        icon={<Icon sx={{ fontSize: 16 }} />}
        label={config.label}
        color={config.color}
        size="small"
        sx={{ fontWeight: 500 }}
      />
    );
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", mt: 14 }}>
      <Navigation isBg={true} />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
            sx={{ color: "text.secondary" }}
          >
            Back
          </Button>
          <Typography variant="h4" fontWeight="bold">
            My Orders
          </Typography>
        </Box>

        {/* Status Filters */}
        <Paper sx={{ mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                minWidth: isMobile ? "auto" : 120,
              },
            }}
          >
            <Tab label="All Orders" value="all" />
            <Tab label="Pending" value="pending" />
            <Tab label="Processing" value="processing" />
            <Tab label="Shipped" value="shipped" />
            <Tab label="Delivered" value="delivered" />
            <Tab label="Cancelled" value="cancelled" />
          </Tabs>
        </Paper>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent sx={{ textAlign: "center", py: 6 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No orders found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                You don't have any orders with this status.
              </Typography>
              <Button variant="contained" onClick={() => navigate("/tyres")}>
                Browse Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Desktop Table View */}
            {!isMobile ? (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "grey.50" }}>
                      <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Items</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Total</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow
                        key={order.id}
                        sx={{ "&:hover": { bgcolor: "grey.50" } }}
                      >
                        <TableCell>
                          <Typography fontWeight={500}>{order.id}</Typography>
                        </TableCell>
                        <TableCell>
                          {new Date(order.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {order.items
                              .map((item) => `${item.name} (x${item.quantity})`)
                              .join(", ")}
                          </Typography>
                        </TableCell>
                        <TableCell>{getStatusChip(order.status)}</TableCell>
                        <TableCell>
                          <Typography fontWeight={600}>
                            £{order.total.toFixed(2)}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            startIcon={<Visibility />}
                            sx={{ textTransform: "none" }}
                            onClick={() => navigate(`/orders/${order.id}`)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              /* Mobile Card View */
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {filteredOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Box>
                          <Typography fontWeight={600}>{order.id}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(order.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </Typography>
                        </Box>
                        {getStatusChip(order.status)}
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {order.items
                          .map((item) => `${item.name} (x${item.quantity})`)
                          .join(", ")}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography fontWeight={600}>
                          £{order.total.toFixed(2)}
                        </Typography>
                        <Button
                          size="small"
                          startIcon={<Visibility />}
                          sx={{ textTransform: "none" }}
                          onClick={() => navigate(`/orders/${order.id}`)}
                        >
                          View Details
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            )}
          </>
        )}
      </Container>

      <Footer />
    </Box>
  );
};

export default Orders;
