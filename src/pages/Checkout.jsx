import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Avatar,
  Chip,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  CreditCard,
  AccountBalance,
  LocalShipping,
  CheckCircle,
  ArrowBack,
  Lock,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StripeWrapper from "../components/Stripe/StripeWrapper";
import PaypalGateway from "../components/PaypalForm";

const steps = ["Cart Review", "Shipping Details", "Payment"];

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  const handleShippingChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert(
      "Payment processing... In production, this would connect to Stripe/Klarna/PayPal"
    );
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navigation isBg={true} />
        <Container maxWidth="md" sx={{ flex: 1, py: 8, textAlign: "center" }}>
          <CheckCircle sx={{ fontSize: 80, color: "success.main", mb: 3 }} />
          <Typography variant="h4" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Add some products before proceeding to checkout
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/tyres")}
            sx={{ bgcolor: "#EB3300", "&:hover": { bgcolor: "#d12d00" } }}
          >
            Continue Shopping
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.50",
        mt: 12,
      }}
    >
      <Navigation isBg={true} />

      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back
        </Button>

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Checkout
        </Typography>

        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Step 0: Cart Review */}
            {activeStep === 0 && (
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
                          <Chip
                            label={item.size}
                            size="small"
                            sx={{ mt: 0.5 }}
                          />
                        )}
                        {item.color && (
                          <Chip
                            label={item.color}
                            size="small"
                            sx={{ mt: 0.5, ml: 0.5 }}
                          />
                        )}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
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
            )}

            {/* Step 1: Shipping Details */}
            {activeStep === 1 && (
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={shippingDetails.firstName}
                        onChange={handleShippingChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={shippingDetails.lastName}
                        onChange={handleShippingChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={shippingDetails.phone}
                        onChange={handleShippingChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={shippingDetails.address}
                        onChange={handleShippingChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={shippingDetails.city}
                        onChange={handleShippingChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
            )}

            {/* Step 2: Payment */}
            {activeStep === 2 && (
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
                    <Lock color="primary" />
                    <Typography variant="h6">Secure Payment</Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />

                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend" sx={{ mb: 2 }}>
                      Select Payment Method
                    </FormLabel>
                    <RadioGroup
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      {/* Credit/Debit Card (Stripe) */}
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          mb: 2,
                          cursor: "pointer",
                          border:
                            paymentMethod === "card"
                              ? "2px solid"
                              : "1px solid",
                          borderColor:
                            paymentMethod === "card"
                              ? "primary.main"
                              : "divider",
                        }}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <FormControlLabel
                          value="card"
                          control={<Radio />}
                          label={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <CreditCard sx={{ color: "#6772E5" }} />
                              <Box>
                                <Typography fontWeight="bold">
                                  Credit/Debit Card
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Powered by Stripe - Visa, Mastercard, Amex
                                </Typography>
                              </Box>
                              <Box
                                component="img"
                                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                                sx={{ height: 24, ml: "auto" }}
                              />
                            </Box>
                          }
                          sx={{ m: 0, width: "100%" }}
                        />
                        {paymentMethod === "card" && (
                          // <Box sx={{ mt: 2, pl: 4 }}>
                          //   <Grid container spacing={2}>
                          //     <Grid item xs={12}>
                          //       <TextField
                          //         fullWidth
                          //         label="Card Number"
                          //         placeholder="1234 5678 9012 3456"
                          //         size="small"
                          //       />
                          //     </Grid>
                          //     <Grid item xs={6}>
                          //       <TextField
                          //         fullWidth
                          //         label="Expiry Date"
                          //         placeholder="MM/YY"
                          //         size="small"
                          //       />
                          //     </Grid>
                          //     <Grid item xs={6}>
                          //       <TextField
                          //         fullWidth
                          //         label="CVC"
                          //         placeholder="123"
                          //         size="small"
                          //       />
                          //     </Grid>
                          //   </Grid>
                          // </Box>
                          <StripeWrapper />
                        )}
                      </Paper>

                      {/* Klarna */}
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          mb: 2,
                          cursor: "pointer",
                          border:
                            paymentMethod === "klarna"
                              ? "2px solid"
                              : "1px solid",
                          borderColor:
                            paymentMethod === "klarna"
                              ? "primary.main"
                              : "divider",
                        }}
                        onClick={() => setPaymentMethod("klarna")}
                      >
                        <FormControlLabel
                          value="klarna"
                          control={<Radio />}
                          label={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <AccountBalance sx={{ color: "#FFB3C7" }} />
                              <Box>
                                <Typography fontWeight="bold">
                                  Klarna
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Pay later in 3 interest-free instalments
                                </Typography>
                              </Box>
                              <Box
                                component="img"
                                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Klarna_Payment_Badge.svg"
                                sx={{ height: 28, ml: "auto" }}
                              />
                            </Box>
                          }
                          sx={{ m: 0, width: "100%" }}
                        />
                        {paymentMethod === "klarna" && (
                          <Box sx={{ mt: 2, pl: 4 }}>
                            <Typography variant="body2" color="text.secondary">
                              You'll be redirected to Klarna to complete your
                              purchase. Pay in 3 instalments of £
                              {(total / 3).toFixed(2)} each.
                            </Typography>
                          </Box>
                        )}
                      </Paper>

                      {/* PayPal */}
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          cursor: "pointer",
                          border:
                            paymentMethod === "paypal"
                              ? "2px solid"
                              : "1px solid",
                          borderColor:
                            paymentMethod === "paypal"
                              ? "primary.main"
                              : "divider",
                        }}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <FormControlLabel
                          value="paypal"
                          control={<Radio />}
                          label={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <Box
                                component="img"
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                sx={{ height: 24 }}
                              />
                              <Box>
                                <Typography fontWeight="bold">
                                  PayPal
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Pay securely with your PayPal account
                                </Typography>
                              </Box>
                            </Box>
                          }
                          sx={{ m: 0, width: "100%" }}
                        />
                        {paymentMethod === "paypal" && (
                          <PaypalGateway />
                          // <Box sx={{ mt: 2, pl: 4 }}>
                          //   <Typography variant="body2" color="text.secondary">
                          //     You'll be redirected to PayPal to complete your
                          //     purchase.
                          //   </Typography>
                          // </Box>
                        )}
                      </Paper>
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {activeStep < steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ bgcolor: "#EB3300", "&:hover": { bgcolor: "#d12d00" } }}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handlePayment}
                  startIcon={<Lock />}
                  sx={{ bgcolor: "#EB3300", "&:hover": { bgcolor: "#d12d00" } }}
                >
                  Pay £{total.toFixed(2)}
                </Button>
              )}
            </Box>
          </Grid>

          {/* Order Summary Sidebar */}
          <Grid item xs={12} md={4}>
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

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography>Subtotal</Typography>
                  <Typography>£{subtotal.toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography>Shipping</Typography>
                  <Typography
                    color={shipping === 0 ? "success.main" : "text.primary"}
                  >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Lock fontSize="small" color="success" />
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
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Checkout;
