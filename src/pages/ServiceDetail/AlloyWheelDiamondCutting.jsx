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
import diamondcut1 from "../../assets/services/wheelcut/wheelcut1.webp";
import Navigation from "../../components/Navigation";
import Banner from "../../components/Banner";

export default function AlloyWheelDiamondCuttingPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Alloy Wheels Diamond Cutting Service"}
        des={
          "Precision CNC machining using diamond-tipped tools to deliver a glossy, two-tone finish that gives your alloy wheels a premium, factory-new appearance."
        }
      />

      <Container maxWidth="xlg" sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card elevation={2} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="360"
                image={diamondcut1}
                alt="Diamond cutting alloy wheels"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Diamond Cutting Alloy Wheels
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Diamond cutting gives your wheels a mirror-like,
                  precision-machined surface by shaving off a thin metal layer
                  with a diamond-tipped lathe, producing a stunning two-tone
                  finish.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="CNC Precision" />
              <Chip label="High Gloss Finish" />
              <Chip label="Two-Tone Style" />
            </Stack>
          </Grid>

          {/* Right Section - Details */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card sx={{ p: 2 }} elevation={1}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Overview
                </Typography>
                <Typography paragraph>
                  Diamond cutting is a specialist alloy wheel finishing process
                  that uses a diamond-tipped lathe to precisely remove a thin
                  layer of metal, revealing a reflective, polished surface. It’s
                  a popular choice for high-end vehicles due to its elegant and
                  unique two-tone appearance.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Process
                </Typography>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Inspection</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Each wheel is carefully inspected for cracks, corrosion,
                      or deformation to ensure it’s suitable for diamond
                      cutting.
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
                        <ListItemText primary="Wheels are cleaned and stripped of any old paint or coatings." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Minor bends or imperfections are corrected to ensure balance." />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Diamond Cutting</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The wheel is mounted on a CNC lathe, and a diamond-tipped
                      tool precisely shaves off a micro layer of the metal
                      surface, producing fine, circular machining lines that
                      reflect light for a mirror effect.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Polishing & Coating
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="After cutting, the surface is polished to enhance shine." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="A clear lacquer or powder coating is applied to protect against corrosion." />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Final Assembly</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Once cured, the wheels are reassembled, balanced, and
                      refitted to the vehicle, restoring their pristine
                      appearance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Benefits
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Premium glossy finish that enhances wheel aesthetics." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Two-tone design often found on luxury and sports cars." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Increased resale value and fresh, factory look." />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Maintenance Tips
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Clean wheels regularly to protect the lacquered surface." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Avoid strong chemicals and abrasive cleaners." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Prevent curb contact to avoid scratching the polished metal." />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Bottom Cards */}
          <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Cost & Durability
                  </Typography>
                  <Typography paragraph>
                    The process typically costs £350–£450 for a set of four
                    wheels, depending on size and complexity. With proper
                    maintenance, the finish can last 1–3 years before
                    refinishing is needed.
                  </Typography>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Diamond Cutting vs Powder Coating
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="Diamond cutting offers a unique, reflective finish ideal for aesthetics." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Powder coating provides better durability against chips and corrosion." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Many owners combine both for a stylish two-tone effect." />
                    </ListItem>
                  </List>
                </Card>
              </Grid>

              <Grid item size={{ xs: 12 }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Frequently Asked Questions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="How many times can a wheel be diamond cut?"
                          secondary="Usually 2–3 times, as each cut removes a thin metal layer. Too many cuts can weaken the wheel."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Can damaged diamond-cut wheels be repaired?"
                          secondary="Yes, through refinishing or re-cutting, as long as the damage isn’t structural."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="How long does the process take?"
                          secondary="Typically 2–4 days, depending on wheel condition and curing time for the lacquer."
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
