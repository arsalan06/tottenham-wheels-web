import React, { useState } from "react";
import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import SpacersRoute from "../components/Spacers";
import { useIsMobile } from "../hooks/use-mobile";
import Adapters from "../components/Adapters";
import SpigotRings from "../components/SpigotRings";
import Bolts from "../components/Bolts";
import LockBolts from "../components/BoltCovers";
import BoltCovers from "../components/LockBolts";
import Protectors from "../components/Protectors";
import Sensors from "../components/Sensors";
import CentreCabs from "../components/CentreCabs";

const Accessories = () => {
  const [value, setValue] = useState(0);
  const isMobile = useIsMobile();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tab-panel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: { xs: 1, md: 3 } }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tab-panel-${index}`,
    };
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          background: "#EB3300",
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
            Accessories
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 4, maxWidth: "600px" }}
          >
            Essential tools and accessories for maintenance, safety, and
            styling.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }} maxWidth="xl">
        <Box sx={{ mb: 6 }}>
          {/* <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Shop by Category
          </Typography> */}

          {/* ✅ Responsive Scrollable Tabs Wrapper */}
          <Box
            sx={{
              overflowX: "auto",
              width: isMobile ? "90vw" : "100vw",
              pb: 1,
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": { height: 6 },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ccc",
                borderRadius: 3,
              },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="accessories tabs"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                minWidth: "max-content",
                "& .MuiTabs-indicator": { display: "none" },
                "& .MuiTab-root": {
                  flexShrink: 0,
                  minWidth: { xs: 90, sm: 120, md: 140 },
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.8, sm: 1 },
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 500,
                  color: "#444",
                  backgroundColor: "#f2f2f2",
                  mx: 0.4,
                  my: 0.5,
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "#fff",
                    fontWeight: 600,
                  },
                },
              }}
            >
              <Tab label="Spacers" {...a11yProps(0)} />
              <Tab label="Adapters" {...a11yProps(1)} />
              <Tab label="Spigot Rings" {...a11yProps(2)} />
              <Tab label="Bolts" {...a11yProps(3)} />
              <Tab label="Lock Bolts" {...a11yProps(4)} />
              <Tab label="Bolt Covers" {...a11yProps(5)} />
              <Tab label="Protectors" {...a11yProps(6)} />
              <Tab label="Sensors" {...a11yProps(7)} />
              <Tab label="Centre Cabs" {...a11yProps(8)} />
            </Tabs>
          </Box>

          {/* ✅ Tab Panels */}
          <CustomTabPanel value={value} index={0}>
            <SpacersRoute />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Adapters />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <SpigotRings />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Bolts />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <LockBolts />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <BoltCovers />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <Protectors />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
            <Sensors />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={8}>
            <CentreCabs />
          </CustomTabPanel>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Accessories;
