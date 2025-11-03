import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Zap, Shield, Award } from "lucide-react";
import heroImage from "../assets/hero-wheels.jpg";
import { useIsMobile } from "../hooks/use-mobile";
const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: !isMobile ? "100dvh" : "80dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
        },
      }}
    >
      <Container
        maxWidth="xlg"
        sx={{
          position: "relative",
          zIndex: 2,
          pb: isMobile && 10,
          pt: isMobile && 15,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ color: "white" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Premium{" "}
                <Box component="span" sx={{ color: "#EB3300" }}>
                  Wheels
                </Box>{" "}
                &
                <br />
                Accessories
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 4,
                  maxWidth: "500px",
                }}
              >
                Find the perfect wheels for your vehicle. Quality brands,
                competitive prices, and expert fitting services all in one
                place.
              </Typography>

              {/* Features */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Zap size={20} color="#EB3300" />
                    <Typography variant="body2">Fast Delivery</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Shield size={20} color="#EB3300" />
                    <Typography variant="body2">Quality Guarantee</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Award size={20} color="#EB3300" />
                    <Typography variant="body2">Expert Fitting</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#EB3300",
                    "&:hover": { bgcolor: "#d12e00" },
                  }}
                >
                  Shop Tyres Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                      borderColor: "white",
                    },
                  }}
                >
                  Book Fitting Service
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Content - Tyre Finder */}
          {/* <Grid item xs={12} lg={6}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#1a1a1a' }}>
                  Find Your Perfect Tyres
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>Vehicle Make</InputLabel>
                    <Select
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      label="Vehicle Make"
                    >
                      <MenuItem value="audi">Audi</MenuItem>
                      <MenuItem value="bmw">BMW</MenuItem>
                      <MenuItem value="ford">Ford</MenuItem>
                      <MenuItem value="mercedes">Mercedes</MenuItem>
                      <MenuItem value="toyota">Toyota</MenuItem>
                      <MenuItem value="volkswagen">Volkswagen</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Vehicle Model</InputLabel>
                    <Select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      label="Vehicle Model"
                    >
                      <MenuItem value="a3">A3</MenuItem>
                      <MenuItem value="a4">A4</MenuItem>
                      <MenuItem value="golf">Golf</MenuItem>
                      <MenuItem value="focus">Focus</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Tyre Size"
                    placeholder="e.g. 205/55 R16"
                    variant="outlined"
                  />

                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<Search />}
                    sx={{ py: 1.5 }}
                  >
                    Search Tyres
                  </Button>
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    mt: 2,
                    color: 'text.secondary'
                  }}
                >
                  Need help? Call us on <Box component="span" sx={{ fontWeight: 'bold' }}>0800 123 4567</Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Container>
      {/* <MainFilters /> */}
    </Box>
  );
};

export default HeroSection;
