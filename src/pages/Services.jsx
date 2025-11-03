import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
  Rating,
  useTheme,
} from "@mui/material";
import { CheckCircle, Clock, MapPin, Phone, Star, Wrench } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Services = () => {
  const theme = useTheme();
  const services = [
    {
      id: 1,
      name: "Tyre Fitting",
      price: "From £15",
      duration: "30 mins",
      image: "/placeholder.svg",
      description:
        "Professional tyre fitting with wheel balancing and alignment check",
      features: [
        "Wheel balancing",
        "Valve replacement",
        "Disposal of old tyres",
        "Safety check",
      ],
    },
    {
      id: 2,
      name: "Wheel Alignment",
      price: "From £45",
      duration: "45 mins",
      image: "/placeholder.svg",
      description:
        "Precision wheel alignment to improve handling and tyre life",
      features: [
        "4-wheel alignment",
        "Suspension check",
        "Steering adjustment",
        "Test drive",
      ],
    },
    {
      id: 3,
      name: "Tyre Pressure Check",
      price: "FREE",
      duration: "10 mins",
      image: "/placeholder.svg",
      description: "Complimentary tyre pressure check and adjustment",
      features: [
        "Pressure check",
        "Visual inspection",
        "Valve check",
        "Advice on tyre condition",
      ],
    },
    {
      id: 4,
      name: "Mobile Fitting",
      price: "From £25",
      duration: "60 mins",
      image: "/placeholder.svg",
      description: "We come to you - tyre fitting at your location",
      features: [
        "At your location",
        "Same day service",
        "All equipment provided",
        "Emergency callout",
      ],
    },
    {
      id: 5,
      name: "Puncture Repair",
      price: "From £20",
      duration: "20 mins",
      image: "/placeholder.svg",
      description: "Quick and reliable puncture repair service",
      features: [
        "Internal patch",
        "Safety inspection",
        "Pressure test",
        "Guarantee included",
      ],
    },
    {
      id: 6,
      name: "Seasonal Storage",
      price: "From £80",
      duration: "N/A",
      image: "/placeholder.svg",
      description: "Winter/summer tyre storage service",
      features: [
        "Climate controlled",
        "Labeling system",
        "Regular inspection",
        "Cleaning included",
      ],
    },
  ];

  const locations = [
    {
      name: "Central London",
      address: "123 High Street, London, SW1A 1AA",
      phone: "020 7123 4567",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-17:00, Sun: 10:00-16:00",
      rating: 4.8,
    },
    {
      name: "Birmingham",
      address: "456 Bull Ring, Birmingham, B1 1AA",
      phone: "0121 123 4567",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-17:00, Sun: Closed",
      rating: 4.9,
    },
    {
      name: "Manchester",
      address: "789 Market Street, Manchester, M1 1AA",
      phone: "0161 123 4567",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-17:00, Sun: 10:00-16:00",
      rating: 4.7,
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main}CC 100%)`,
          color: "white",
          py: 8,
          pt: 18,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Professional Services
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 4, maxWidth: "600px" }}
          >
            Expert tyre fitting, alignment, and maintenance services by
            certified technicians.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "secondary.main",
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            Book Service Now
          </Button>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Services Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
            Our Services
          </Typography>
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid item xs={12} md={6} lg={4} key={service.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.name}
                    />
                    <Chip
                      label={service.duration}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "primary.main",
                        color: "white",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {service.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "primary.main" }}
                      >
                        {service.price}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <CheckCircle size={16} color="#4caf50" />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<Clock size={16} />}
                      sx={{ mt: "auto" }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Locations */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
            Service Locations
          </Typography>
          <Grid container spacing={3}>
            {locations.map((location) => (
              <Grid item xs={12} md={4} key={location.name}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <MapPin
                          size={20}
                          color={theme.palette.secondary.main}
                        />
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {location.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Star size={16} fill="#ffc107" color="#ffc107" />
                        <Typography variant="body2">
                          {location.rating}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {location.address}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Phone size={16} color={theme.palette.secondary.main} />
                        <Typography variant="body2">
                          {location.phone}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Clock size={16} color={theme.palette.secondary.main} />
                        <Typography variant="body2">
                          {location.hours}
                        </Typography>
                      </Box>
                    </Box>

                    <Button variant="outlined" fullWidth>
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Choose Us */}
        <Box sx={{ mb: 8 }}>
          <Card
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main}CC 100%)`,
              color: "white",
            }}
          >
            <CardContent sx={{ p: 6 }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                  Why Choose Our Services?
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Professional, reliable, and convenient
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {[
                  {
                    icon: Wrench,
                    title: "Expert Technicians",
                    desc: "Certified professionals with years of experience",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Guarantee",
                    desc: "All work backed by our comprehensive warranty",
                  },
                  {
                    icon: Clock,
                    title: "Quick Service",
                    desc: "Same-day fitting available at all locations",
                  },
                ].map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderRadius: "50%",
                          width: 64,
                          height: 64,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <item.icon size={32} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>{item.desc}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Emergency Service */}
        <Card sx={{ border: 2, borderColor: "primary.main" }}>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
            >
              24/7 Emergency Service
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Breakdown? We're here to help. Call our emergency hotline for
              immediate assistance.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              color="primary"
            >
              Emergency: 0800 999 8888
            </Button>
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default Services;
