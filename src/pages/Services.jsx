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
} from "@mui/material";
import { CheckCircle, Clock, Phone, ViewIcon, Wrench } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Callipers1 from "../assets/services/Callipers/Callipers1.webp";
import Callipers2 from "../assets/services/Callipers/Callipers2.webp";
import wheelrepair1 from "../assets/services/wheel-repair/Alloy-wheel-repair1.webp";
import wheelrepair2 from "../assets/services/wheel-repair/Alloy-wheel-repair2.webp";
import wheelcut1 from "../assets/services/wheelcut/wheelcut1.webp";
import wheelcut2 from "../assets/services/wheelcut/wheelcut2.webp";
import wetSpray from "../assets/services/wet-spray/wetSpray.webp";
import wheelChange from "../assets/services/wheel-change/wheelChange.png";
import oilChange from "../assets/services/oil-change/oilchange.png";
import powerCoating1 from "../assets/services/power-coating/power-coating1.png";
import powerCoating2 from "../assets/services/power-coating/power-coating2.webp";
import Alloygator from "../assets/services/Alloy-gator/Alloygator.png";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "Callipers Painting Service",
      price: "From £15",
      duration: "30 mins",
      route: "/caliperPaintingDetail",
      image: [Callipers1, Callipers2],
      description:
        "High-quality caliper painting service to enhance your vehicle’s look with durable, vibrant colors.",
    },
    {
      id: 2,
      name: "Alloy Wheels cracks Repair",
      price: "From £45",
      duration: "45 mins",
      route: "/alloyWheelCrackRepair",
      image: [wheelrepair1, wheelrepair2],
      description:
        "Professional repair service for fixing cracks in alloy wheels to restore strength and appearance.",
    },
    {
      id: 3,
      name: "Alloy Wheels Diamond Cutting Service",
      price: "FREE",
      duration: "10 mins",
      route: "/alloyWheelDiamondCutting",
      image: [wheelcut1, wheelcut2],
      description:
        "Precision diamond cutting service to restore alloy wheels’ original shine and flawless finish.",
    },
    {
      id: 4,
      name: "Wet Spray",
      price: "From £25",
      route: "/wetSprayAlloyWheels",
      duration: "60 mins",
      image: [wetSpray],
      description:
        "Unique core competen resource sucking methods of empowerment disciplinary deliverables after cost effective",
    },
    {
      id: 5,
      name: "Tyres changing service",
      price: "From £20",
      duration: "20 mins",
      route: "/tyreChangingService",
      image: [wheelChange],
      description:
        "Fast and reliable tyre changing service ensuring safe, smooth, and balanced driving performance.",
    },
    {
      id: 6,
      name: "Fresh Oil Input",
      price: "From £80",
      duration: "N/A",
      route: "/freshOilInput",
      image: [oilChange],
      description:
        "Professional fresh oil change service to keep your engine running smoothly and efficiently.",
    },
    {
      id: 7,
      name: "Powder Coating Alloy Wheels",
      price: "From £80",
      route: "/powderCoatingService",
      duration: "N/A",
      image: [powerCoating1, powerCoating2],
      description:
        "Durable powder coating service to protect and refresh alloy wheels with a flawless, long-lasting finish.",
    },
    {
      id: 8,
      name: "Alloygator Supply And Fitting",
      price: "From £80",
      route: "/alloyGatorSupplyAndFitting",
      duration: "N/A",
      image: [Alloygator],
      description:
        "Professional AlloyGator supply and fitting service to protect your alloy wheels from curb damage and enhance their appearance.",
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
          {/* <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "secondary.main",
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            Book Service Now
          </Button> */}
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
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                key={service.id}
              >
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
                      image={service.image[0]}
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
                      {/* <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "primary.main" }}
                      >
                        {service.price}
                      </Typography> */}
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>

                    {/* <Box sx={{ mb: 3 }}>
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
                    </Box> */}

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ViewIcon size={16} />}
                      onClick={() => navigate(service?.route)}
                      sx={{ mt: "auto" }}
                    >
                      View Details
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
                  <Grid
                    item
                    size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                    key={item.title}
                  >
                    <Box sx={{ textAlign: "center", width: "100%" }}>
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
