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
import powderCoatingImg from "../../assets/services/power-coating/power-coating1.png";
export default function PowderCoatingServicePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Powder Coating"}
        des={
          "High-quality powder coating service for alloy wheels — offering a durable, stylish, and protective finish against corrosion, scratches, and UV damage."
        }
      />

      <Container maxWidth="xlg" sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section - Image and Intro */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Card elevation={2} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="360"
                image={powderCoatingImg}
                alt="Powder coating alloy wheels"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Powder Coating Alloy Wheels
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Powder coating is a popular method for finishing alloy wheels,
                  offering a durable, long-lasting, and high-quality finish. It
                  involves applying a dry powder to the surface of the alloy
                  wheel, which is then cured under heat to form a strong, smooth
                  coating. This process protects the wheels from corrosion,
                  scratches, and UV damage, while also enhancing their
                  appearance.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Durable Finish" />
              <Chip label="Scratch Resistant" />
              <Chip label="UV Protected" />
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
                  Powder coating is a popular method for finishing alloy wheels,
                  offering a durable, long-lasting, and high-quality finish. It
                  involves applying a dry powder to the surface of the alloy
                  wheel, which is then cured under heat to form a strong, smooth
                  coating. This process protects the wheels from corrosion,
                  scratches, and UV damage, while also enhancing their
                  appearance.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Powder Coating Process
                </Typography>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">1. Preparation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The wheels are first cleaned and stripped of any old
                      paint, dirt, or contaminants. This may involve media
                      blasting, acid cleaning, or other methods to ensure the
                      surface is clean and smooth.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      2. Priming (Optional)
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Some shops apply a primer to improve adhesion, though it’s
                      not always necessary depending on the powder used.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      3. Powder Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The powder coating material is sprayed onto the wheel
                      using an electrostatic spray gun, which gives the powder a
                      negative charge. The wheel is grounded, causing the powder
                      to stick to the surface.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">4. Curing</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      After the powder is applied, the wheel is placed in an
                      oven and heated to a specific temperature (usually around
                      180–200°C or 350–400°F). This melts the powder, which then
                      bonds with the wheel and hardens, creating a smooth,
                      durable finish.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      5. Cooling & Inspection
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Once the wheels are removed from the oven and allowed to
                      cool, they are checked for any defects. If necessary, the
                      wheels may undergo additional finishing, such as polishing
                      or clear-coating.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Benefits of Powder Coating Alloy Wheels
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Durability: The coating is much harder and more resistant to chips, scratches, and other damage compared to traditional paint." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Aesthetics: Powder coating is available in a wide variety of colours, textures, and finishes, allowing for a high degree of customization." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Protection: It offers a layer of protection against weather, salt, and chemicals, making it ideal for vehicles exposed to harsh conditions." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Environmentally Friendly: Unlike liquid paints, powder coatings emit fewer volatile organic compounds (VOCs), making them a more eco-friendly option." />
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
