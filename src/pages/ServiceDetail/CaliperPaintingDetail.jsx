import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Callipers1 from "../../assets/services/Callipers/Callipers1.webp";
import Navigation from "../../components/Navigation";
import Banner from "../../components/Banner";
// CaliperPaintingDetailPage
// Single-file React component (Material UI v5) — drop into your project and adapt assets/links as needed.

export default function CaliperPaintingDetailPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Callipers Painting Service"}
        des={
          "High-quality caliper painting service to enhance your vehicle’s look with durable, vibrant colors."
        }
      />
      <Container maxWidth="xlg" sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Hero / Image */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card elevation={2} sx={{ borderRadius: 2 }}>
              {/* Replace src with your image path */}
              <CardMedia
                component="img"
                height="360"
                image={Callipers1}
                alt="Brake caliper painting"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Brake Caliper Painting Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enhance the appearance and durability of your brake calipers
                  with heat-resistant, long-lasting paint — perfect for a
                  sporty, custom look.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Heat-Resistant Paint" />
              <Chip label="Multiple Colours" />
              <Chip label="Optional Clear Coat" />
            </Stack>
          </Grid>

          {/* Details */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card elevation={1} sx={{ p: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Service Overview
                </Typography>
                <Typography paragraph>
                  A brake caliper painting service involves enhancing the
                  appearance and durability of a vehicle’s brake calipers by
                  applying specialized heat-resistant paint. The calipers are
                  visible through many wheels, making this a high-impact visual
                  upgrade.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Benefits
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Aesthetic appeal: sporty or custom look" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Protection from corrosion, rust and brake dust" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Customization with popular and custom colours" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Process (what we do)
                </Typography>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Preparation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Wheel removal to access callipers" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Deep cleaning to remove dirt, grease and brake dust" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Sanding or scuffing where necessary for adhesion" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Masking & Priming</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Surrounding parts (rotors, pads, suspension) are masked
                      off to prevent overspray. A heat-resistant primer may be
                      applied for improved adhesion and corrosion protection.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Painting & Finishing
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Multiple thin coats of high-temp paint" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Optional clear coat for gloss and extra protection" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Drying/curing (heat lamps or baking to speed curing)" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Typical Pricing (guide)
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Basic set of 4 calipers (standard colours): £150 - £200" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Custom colours / logos / decals: from £400 and up" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Extra sections full width */}
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Maintenance & Care
                  </Typography>
                  <Typography paragraph>
                    Keep calipers clean when you wash your car. Avoid harsh
                    chemicals and abrasive brushes. If you drive on salted roads
                    or rough surfaces, clean more often to prevent corrosion and
                    protect the painted finish.
                  </Typography>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Popular Colours
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 1, flexWrap: "wrap" }}
                  >
                    {["Red", "Yellow", "Black", "Silver", "Blue", "Custom"].map(
                      (c) => (
                        <Chip key={c} label={c} sx={{ m: 0.5 }} />
                      )
                    )}
                  </Stack>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    DIY vs Professional
                  </Typography>
                  <Typography paragraph>
                    DIY kits exist and can be cheaper (£50 - £100), but
                    professional work typically delivers more consistent
                    adhesion, heat-resistant materials and longer-lasting
                    results. Pros also avoid common DIY mistakes such as uneven
                    coats or contamination.
                  </Typography>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Frequently Asked Questions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="How long does the full job take?"
                          secondary="Typically a few hours; curing can take longer depending on method."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Will paint withstand heavy braking?"
                          secondary="High-temp automotive paints are formulated to resist the heat from braking; clear coats add extra protection."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Can you match custom colours?"
                          secondary="Yes — we can usually match body colours or create custom shades (extra cost may apply)."
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
