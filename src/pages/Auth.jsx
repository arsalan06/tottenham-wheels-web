import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Tabs,
  Tab,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  ArrowBack,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [authTab, setAuthTab] = useState(0); // 0 = Sign In, 1 = Sign Up
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (authTab === 1) {
      // Sign Up validation
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords don't match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulated auth - replace with real auth later
    alert(
      authTab === 0 ? "Sign in successful!" : "Account created successfully!"
    );
    navigate(from);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
        bgcolor: "grey.50",
      }}
    >
      {/* <Navigation isBg={true} /> */}

      <Container maxWidth="sm" sx={{ flex: 1, py: 6 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back
        </Button>

        <Card elevation={3}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Person sx={{ fontSize: 48, color: "#EB3300", mb: 1 }} />
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {authTab === 0 ? "Welcome Back" : "Create Account"}
              </Typography>
              <Typography color="text.secondary">
                {authTab === 0
                  ? "Sign in to access your account"
                  : "Sign up to track orders and save details"}
              </Typography>
            </Box>

            <Tabs
              value={authTab}
              onChange={(e, newValue) => {
                setAuthTab(newValue);
                setErrors({});
              }}
              variant="fullWidth"
              sx={{ mb: 3, borderBottom: 1, borderColor: "divider" }}
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>

            <Box component="form" onSubmit={handleSubmit}>
              {/* Sign Up - Name Fields */}
              {authTab === 1 && (
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleChange("firstName")}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleChange("lastName")}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                    />
                  </Grid>
                </Grid>
              )}

              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange("password")}
                error={!!errors.password}
                helperText={errors.password}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Sign Up - Confirm Password */}
              {authTab === 1 && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  sx={{ mb: 2 }}
                />
              )}

              {/* Sign In - Remember Me & Forgot Password */}
              {authTab === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.rememberMe}
                        onChange={handleChange("rememberMe")}
                        size="small"
                      />
                    }
                    label="Remember me"
                  />
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ fontSize: "0.875rem" }}
                  >
                    Forgot password?
                  </Link>
                </Box>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  bgcolor: "#EB3300",
                  "&:hover": { bgcolor: "#d12d00" },
                  py: 1.5,
                  mb: 2,
                }}
              >
                {authTab === 0 ? "Sign In" : "Create Account"}
              </Button>

              {authTab === 1 && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ mb: 2 }}
                >
                  By signing up, you agree to our{" "}
                  <Link href="#" underline="hover">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="#" underline="hover">
                    Privacy Policy
                  </Link>
                </Typography>
              )}

              <Divider sx={{ my: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  or
                </Typography>
              </Divider>

              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate(from)}
                sx={{ py: 1.5 }}
              >
                Continue as Guest
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* <Footer /> */}
    </Box>
  );
};

export default Auth;
