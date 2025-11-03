import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroTyres from "../assets/hero-tyres.jpg";
import heroWheels from "../assets/hero-wheels.jpg";
import heroAccessories from "../assets/hero-accessories.jpg";
import heroServices from "../assets/hero-services.jpg";
import { useIsMobile } from "../hooks/use-mobile";

const FeaturedProducts = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Tyres",
      image: heroTyres,
      path: "/tyres",
    },
    {
      id: 2,
      title: "Wheels",
      image: heroWheels,
      path: "/wheels",
    },
    {
      id: 3,
      title: "Accessories",
      image: heroAccessories,
      path: "/accessories",
    },
    {
      id: 4,
      title: "Services",
      image: heroServices,
      path: "/services",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "background.default", mt: !isMobile && 12 }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Choose from{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Categories
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Browse our comprehensive range of automotive products
          </Typography>
        </Box>

        {/* Categories Grid */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {categories.map((category) => (
            <Grid item size={{ sm: 12, md: 6, lg: 6 }} key={category.id}>
              <Card
                onClick={() => navigate(category.path)}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  height: 400,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    "& .overlay": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={category.image}
                  alt={category.title}
                  sx={{
                    objectFit: "cover",
                    height: "100%",
                  }}
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    py: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {category.title}
                  </Typography>
                </CardContent>
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    Show Products
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
