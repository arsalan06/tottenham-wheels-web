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
import tyreservice1 from "../../assets/services/wheel-change/wheelChange.png";
export default function TyreChangingServicePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Tyres Changing Service"}
        des={
          "Professional tyre replacement and balancing to ensure your safety, comfort, and smooth performance on the road."
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
                image={tyreservice1}
                alt="Tyre changing service"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Tyres Changing Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our tyre changing service ensures proper installation,
                  alignment, and balancing — improving safety, comfort, and
                  overall vehicle performance.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Wheel Balancing" />
              <Chip label="Alignment Check" />
              <Chip label="Tyre Disposal" />
            </Stack>
          </Grid>

          {/* Details */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card sx={{ p: 2 }} elevation={1}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Overview
                </Typography>
                <Typography paragraph>
                  Tyre changing is an essential part of car maintenance that
                  ensures safety, fuel efficiency, and handling performance. Our
                  professionals use advanced tools and care to mount, balance,
                  and align your new tyres correctly.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Step-by-Step Process
                </Typography>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      1. Inspection & Preparation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Check tyre condition, tread wear, and air pressure." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Remove old tyres carefully without damaging rims." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Clean the rims before fitting new tyres." />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      2. Mounting & Balancing
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      New tyres are mounted using precision equipment and
                      balanced to eliminate vibration and uneven wear — ensuring
                      smooth rides and extended tyre life.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      3. Wheel Alignment
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Wheel alignment ensures all tyres meet the road at the
                      correct angle, improving handling and preventing premature
                      tyre wear.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">4. Final Checks</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Air pressure is adjusted, and all bolts are torqued to
                      manufacturer specifications. Old tyres are safely disposed
                      of or recycled.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Benefits of Professional Tyre Changing
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Improves road safety and braking performance" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Ensures optimal fuel efficiency" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Prevents uneven tyre wear and vibration" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Prolongs tyre lifespan" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Recommended Service Frequency
                </Typography>
                <Typography paragraph>
                  Tyres should be inspected every 10,000 km or during routine
                  servicing. Replace them when tread depth is below 1.6mm or if
                  sidewall damage is visible.
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Common Signs You Need Tyre Replacement
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Reduced grip or longer braking distance" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Vibration or pulling while driving" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Uneven tread wear or visible cracks" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Frequent loss of air pressure" />
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
