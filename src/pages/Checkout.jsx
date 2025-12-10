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
import ClientDetails from "../components/ClientDetails";
import ProductList from "../components/ProductList";
import OrderSummary from "../components/OrderSummary";

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
          <Grid item size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
            {/* Step 0: Cart Review */}
            {activeStep === 0 && <ProductList items={items} />}

            {/* Step 1: Shipping Details */}
            {activeStep === 1 && (
              <ClientDetails
                shippingDetails={shippingDetails}
                setShippingDetails={setShippingDetails}
              />
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
                          <StripeWrapper total={total} />
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
                          <PaypalGateway total={total} />
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
              {
                activeStep < steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      bgcolor: "#EB3300",
                      "&:hover": { bgcolor: "#d12d00" },
                    }}
                  >
                    Continue
                  </Button>
                ) : (
                  ""
                )
                //  (
                //   <Button
                //     variant="contained"
                //     onClick={handlePayment}
                //     startIcon={<Lock />}
                //     sx={{ bgcolor: "#EB3300", "&:hover": { bgcolor: "#d12d00" } }}
                //   >
                //     Pay £{total.toFixed(2)}
                //   </Button>
                // )
              }
            </Box>
          </Grid>

          {/* Order Summary Sidebar */}
          <Grid item size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <OrderSummary
              items={items}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Checkout;
