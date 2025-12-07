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
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import wheelrepair1 from "../../assets/services/wheel-repair/Alloy-wheel-repair2.webp";
import Navigation from "../../components/Navigation";
import Banner from "../../components/Banner";
export default function AlloyWheelCrackRepairPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Alloy Wheel Crack Repair"}
        des={
          "Professional inspection, TIG welding, finishing and testing to restore cracked alloy wheels — balancing safety with aesthetics."
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
                image={wheelrepair1}
                alt="Alloy wheel crack repair"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Alloy Wheel Crack Repair
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Professional inspection, TIG welding, finishing and testing to
                  restore cracked alloy wheels — balancing safety with
                  aesthetics.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="TIG Welding" />
              <Chip label="Balancing & Testing" />
              <Chip label="Refinishing" />
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
                  Alloy wheel crack repair involves fixing cracks or damage in
                  an alloy wheel — a task that requires specialist skills
                  because safety and structural integrity are paramount.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Common Causes
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Potholes: impact at speed can cause cracks" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Curbs and rubbing — damage along the rim" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Accidents or hard impacts" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Corrosion from prolonged exposure to salt/water" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Repair Process
                </Typography>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Inspection & Assessment
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Thorough inspection to determine if the crack is
                      repairable. Severe structural damage or critical-area
                      cracks (e.g. spokes) may require replacement rather than
                      repair.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Cleaning & Preparation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Clean to remove dirt, grease and corrosion" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Expose the full extent of the crack for repair" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Welding, Smoothing & Heat Treatment
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Repairs typically use TIG or aluminium welding to fill and
                      bond the crack. After welding the area is ground and
                      smoothed; heat treatment may be applied to recondition the
                      metal.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Testing & Refinishing
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Pressure or leak testing where appropriate" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Wheel balancing and strength checks" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Refinishing and repainting to match original look" />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Can Every Crack Be Repaired?
                </Typography>
                <Typography paragraph>
                  Not always. Cracks in critical structural areas, multiple
                  cracks, or heavily deformed wheels may be unsafe to repair and
                  should be replaced.
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Benefits of Repair
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Cost-effective vs full replacement (especially for custom wheels)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Environmentally friendly (less waste)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Aesthetic restoration when refinished properly" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Risks & When to Replace
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Safety is the top concern — unsafe repairs can lead to failure" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Replace if cracks are large, in spokes, multiple cracks, or heavy bend" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Full width extras */}
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Finding a Professional
                  </Typography>
                  <Typography paragraph>
                    Choose a specialist wheel repair shop with experienced
                    technicians using proper TIG welding equipment and
                    post-repair testing. Ask for guarantees and examples of
                    previous work.
                  </Typography>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Typical Costs (guide)
                  </Typography>
                  <Typography>
                    Repair costs vary by severity and location. Minor cracks and
                    simple welds are generally cheaper than complex structural
                    repairs; always obtain a quote after inspection.
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
                          primary="Will a repaired wheel be as strong as new?"
                          secondary="Repairs restore strength but may not always match factory condition; depends on damage and repair quality."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="How long does repair take?"
                          secondary="Timing depends on the shop and methods — a typical repair can take several hours; refinishing and curing may take longer."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Is there a safety guarantee?"
                          secondary="Reputable shops often provide a warranty or guarantee for their repair work — ask before proceeding."
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
