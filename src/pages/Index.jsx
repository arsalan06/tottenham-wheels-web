import React from "react";
import { Box } from "@mui/material";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import MainFilters from "../components/MainFilters";
import MiddleBanner from "../components/MiddleBanner";

const Index = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation />
      <Box component="main">
        <HeroSection />
        <MainFilters />
        <FeaturedProducts />
        <TestimonialsSection />
        <MiddleBanner />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
