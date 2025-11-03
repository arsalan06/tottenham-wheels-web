import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import wheelsImg1 from "../../assets/Tottenham-wheels1.png"; // 🛠️ Replace with your actual image path
import wheelsImg from "../../assets/Tottenham-wheels.png"; // 🛠️ Replace with your actual image path
import { useIsMobile } from "../../hooks/use-mobile";

const MiddleBanner = () => {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        // py: { xs: 6, md: 10 },
        bgcolor: "grey.50",
        pt: 8,
        mb: 4,
      }}
    >
      <Container maxWidth="xlg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", md: "row", lg: "row" },
          }}
        >
          {/* Left side - Image */}
          <Grid item size={{ sm: 12, md: 6, lg: 6 }}>
            {isMobile ? (
              <Box
                component="img"
                src={wheelsImg}
                alt="Tottenham Wheels Refurbishment"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box
                component="img"
                src={wheelsImg1}
                alt="Tottenham Wheels Refurbishment"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>

          {/* Right side - Content */}
          <Grid item size={{ sm: 12, md: 6, lg: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#1a1a1a",
                textTransform: "uppercase",
              }}
            >
              Tottenham Wheels Ltd
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#EB3300",
              }}
            >
              Alloy Wheel Refurbishment Experts
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, color: "text.secondary", lineHeight: 1.8 }}
            >
              Accidentally scuffed your wheels? Want them looking brand new
              again? Our professional team restores, straightens, and repairs
              alloy wheels with precision. Whether it’s a cracked, buckled, or
              scratched wheel — we’ll bring it back to life fast and affordably.
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, color: "text.secondary", lineHeight: 1.8 }}
            >
              Contact us today for your best quote!
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mt: 2, mb: 2, color: "#1a1a1a" }}
            >
              Here's what we specialise in:
            </Typography>

            <List dense>
              {[
                "Alloy Wheels & Tyres Sale",
                "Powder Coating & Wet Painting",
                "Diamond Cutting",
                "Sand Blasting",
                "Acid Dipping",
                "Calipers Painting",
                "Alloy Wheel Straightening",
                "Alloy Wheel Repairs",
                "Tyre Fitting & Balancing",
              ].map((service, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText
                    primary={`• ${service}`}
                    primaryTypographyProps={{
                      variant: "body1",
                      sx: { color: "text.secondary", lineHeight: 1.8 },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 1, color: "#1a1a1a" }}>
                Rims & Tyres for Your Car
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                Enhance your car’s style and performance with premium rims and
                tyres. The perfect fit for your ride is just a step away!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MiddleBanner;
