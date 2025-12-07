import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navigation from "../../components/Navigation";
import Banner from "../../components/Banner";
import oilService from "../../assets/services/oil-change/oilchange.png";
export default function FreshOilInputServicePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Fresh Oil Input"}
        des={
          "Comprehensive car servicing and repair to ensure your vehicle runs smoothly, efficiently, and safely on every journey."
        }
      />

      <Container maxWidth="xlg" sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Hero */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card elevation={2} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="360"
                image={oilService}
                alt="Fresh oil input service"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Fresh Oil Input
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our Fresh Oil Input service ensures your car's engine and
                  components are well-maintained, reducing wear and improving
                  fuel efficiency. From oil changes to complete system checks,
                  we keep your car running at its best.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Oil Change" />
              <Chip label="Engine Inspection" />
              <Chip label="Brake & Fluid Check" />
            </Stack>
          </Grid>

          {/* Details Section */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card sx={{ p: 2 }} elevation={1}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Overview
                </Typography>
                <Typography paragraph>
                  Regular oil changes and servicing are crucial to keeping your
                  engine clean and efficient. Our Fresh Oil Input service covers
                  preventive maintenance and detailed inspections to prevent
                  breakdowns and ensure performance.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Step-by-Step Process
                </Typography>

                {/* Accordion Sections */}
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      1. Oil & Filter Replacement
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Drain old engine oil and remove the used oil filter." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Install a new high-quality oil filter." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Refill the engine with manufacturer-recommended oil grade." />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      2. Fluid Level Check
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Our technicians inspect and top-up essential fluids such
                      as brake fluid, coolant, windshield washer fluid, and
                      power steering fluid to maintain proper levels.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      3. Brake & Tire Inspection
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Brakes and tires are inspected for wear, pressure, and
                      alignment to ensure reliable handling and safety on the
                      road.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      4. Engine & Battery Check
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The engine, belts, spark plugs, and battery are checked
                      for performance and potential wear issues to prevent
                      future problems.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      5. Final Inspection
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We perform a comprehensive diagnostic and road test to
                      verify all systems are running efficiently before handing
                      the vehicle back.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Benefits of Regular Oil Service
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Increases engine lifespan and reliability" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Improves fuel efficiency" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Reduces engine wear and overheating" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Ensures smoother and quieter performance" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Recommended Service Intervals
                </Typography>
                <Typography paragraph>
                  Engine oil should typically be replaced every 5,000–10,000 km
                  or every 6 months, depending on the manufacturer and driving
                  conditions.
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Signs You Need an Oil Change
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Dark or dirty oil on dipstick" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Engine knocking or louder noise" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Oil change or check-engine light illuminated" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Reduced acceleration or sluggish performance" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
