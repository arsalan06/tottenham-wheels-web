import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useIsMobile } from "../hooks/use-mobile";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const testimonials = [
    {
      id: 1,
      name: "James Miller",
      location: "Manchester",
      rating: 5,
      comment:
        "Excellent service and quality tyres. The team helped me find the perfect tyres for my BMW and fitted them the same day. Highly recommended!",
      vehicle: "BMW 3 Series",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Birmingham",
      rating: 5,
      comment:
        "Great prices and fast delivery. The online tyre finder made it so easy to find the right tyres for my car. Will definitely use again.",
      vehicle: "Ford Focus",
    },
    {
      id: 3,
      name: "Michael Brown",
      location: "Leeds",
      rating: 4,
      comment:
        "Professional service from start to finish. The fitting was quick and the staff were knowledgeable about different tyre options.",
      vehicle: "Audi A4",
    },
    {
      id: 4,
      name: "Emma Wilson",
      location: "Liverpool",
      rating: 5,
      comment:
        "Saved me a lot of money compared to other places. Quality tyres at competitive prices with excellent customer service.",
      vehicle: "Toyota Corolla",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "grey.50", overflowX: "hidden" }}>
      <Container maxWidth="xlg">
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
            What Our{" "}
            <Box component="span" sx={{ color: "#EB3300" }}>
              Customers
            </Box>{" "}
            Say
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Join thousands of satisfied customers who trust us for their tyre
            and automotive needs.
          </Typography>
        </Box>

        {/* ✅ Horizontal Carousel */}
        <Box
          sx={{
            height: "300px",
            width: "100%",
            maxWidth: "95vw",
            overflowX: "hidden",
            ".slick-slider": {
              width: "100%",
            },
            ".slick-list": {
              overflow: "hidden !important",
              margin: "0 -8px",
            },
            ".slick-track": {
              display: "flex !important",
              alignItems: "stretch",
            },
            ".slick-slide": {
              display: "flex !important",
              justifyContent: "center",
              alignItems: "stretch",
              height: "auto !important",
              "& > div": {
                width: "100%",
                height: "100%",
              },
            },
          }}
        >
          <Slider {...settings}>
            {testimonials.map((t) => (
              <Box key={t.id} sx={{ px: 2 }}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "white",
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Quote size={32} color="rgba(33, 150, 243, 0.3)" />
                      <Rating value={t.rating} readOnly size="small" />
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        mb: 3,
                        color: "text.secondary",
                      }}
                    >
                      "{t.comment}"
                    </Typography>

                    <Box
                      sx={{
                        borderTop: 1,
                        borderColor: "divider",
                        pt: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {t.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t.location}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "primary.main" }}
                        >
                          {t.vehicle}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Vehicle
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* ✅ Stats Section */}
        <Box
          sx={{
            mt: 8,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            textAlign: "center",
          }}
        >
          {[
            { value: "25K+", label: "Happy Customers" },
            { value: "50K+", label: "Tyres Fitted" },
            { value: "4.8★", label: "Average Rating" },
            { value: "15+", label: "Years Experience" },
          ].map((stat) => (
            <Box key={stat.label}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
