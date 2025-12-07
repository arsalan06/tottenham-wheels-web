import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Schedule,
  Security,
  LocalShipping,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1a1a1a", color: "white", mt: "auto" }}
    >
      {/* Main Footer Content */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Tottenham<span style={{ color: "#EB3300" }}>Wheels</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "grey.400", mb: 3, lineHeight: 1.6 }}
              >
                Your trusted partner for premium wheels and automotive
                accessories. Quality products, expert service, and competitive
                prices.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone sx={{ fontSize: 16, color: "#EB3300" }} />
                  <Typography variant="body2">+44 7886 644561</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email sx={{ fontSize: 16, color: "#EB3300" }} />
                  <Typography variant="body2">
                    tottenhamwheels17@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOn sx={{ fontSize: 16, color: "#EB3300" }} />
                  <Typography variant="body2">
                    1, 1 - 7 GARMAN ROAD, TOTTENHAM LONDON
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              component="h4"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                "All Tyres",
                "Car Accessories",
                "Wheel Alignment",
                "Tyre Fitting",
                "MOT Testing",
                "About Us",
                "Contact Us",
                "Store Locator",
              ].map((linkText) => (
                <Link
                  key={linkText}
                  href="#"
                  sx={{
                    color: "grey.400",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "#EB3300",
                    },
                  }}
                >
                  {linkText}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              component="h4"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Our Services
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalShipping sx={{ fontSize: 16, color: "#EB3300" }} />
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                  Free Delivery
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Security sx={{ fontSize: 16, color: "#EB3300" }} />
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                  Quality Guarantee
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Schedule sx={{ fontSize: 16, color: "#EB3300" }} />
                <Typography variant="body2" sx={{ color: "grey.400" }}>
                  24/7 Support
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                Opening Hours
              </Typography>
              <Box sx={{ fontSize: "0.875rem", color: "grey.400" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <span>Monday - Saturday: </span>
                  <span>8:00am - 6:30pm</span>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              component="h4"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400", mb: 3 }}>
              Subscribe to our newsletter for special offers and tyre
              maintenance tips.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your email"
                sx={{
                  mb: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255,255,255,0.6)",
                    opacity: 1,
                  },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#EB3300",
                  "&:hover": { bgcolor: "#d12d00" },
                }}
              >
                Subscribe
              </Button>
            </Box>

            {/* Social Media */}
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/share/1Fs1gseppG/",
                  },
                  { icon: Twitter, href: "#" },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/tottenhamwheels?igsh=MWdwNnZ3YjBoYjlwaA==",
                  },
                  { icon: LinkedIn, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <IconButton
                    key={index}
                    href={href}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                      "&:hover": {
                        bgcolor: "#EB3300",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />

      {/* Bottom Footer */}
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © 2024 Tottenham Wheels. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text) => (
                <Link
                  key={text}
                  href="#"
                  sx={{
                    color: "grey.500",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "#EB3300",
                    },
                  }}
                >
                  {text}
                </Link>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
