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
import wetspray1 from "../../assets/services/wet-spray/wetSpray.webp";
export default function WetSprayAlloyWheelsPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"Wet Spray Alloy Wheels"}
        des={
          "Enhance and protect your alloy wheels with a smooth, custom-painted wet spray finish — offering unmatched colour flexibility and premium shine."
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
                image={wetspray1}
                alt="Wet spray alloy wheels"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  Wet Spray Alloy Wheels
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wet spraying offers superior customization with rich colours
                  and finishes, providing a glossy, professional appearance
                  ideal for high-end wheel styling.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Custom Colours" />
              <Chip label="Gloss or Matte Finishes" />
              <Chip label="Protective Clear Coat" />
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
                  Wet spraying alloy wheels uses liquid paint applied with
                  precision spray guns, creating a smooth, customizable finish
                  that’s ideal for achieving unique colours and gloss levels.
                  It’s a top choice for those who want more design flexibility
                  than powder coating allows.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Process Steps
                </Typography>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Preparation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      <ListItem>
                        <ListItemText primary="Remove wheels, tires, and valves for full access." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Thoroughly clean and degrease to remove contaminants." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Strip old coatings and sand smooth for proper adhesion." />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Priming</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      A heat-resistant primer is applied to ensure strong
                      adhesion and even colour distribution.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Paint Application</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Multiple thin layers of liquid paint are sprayed for even
                      coverage. Options include gloss, matte, metallic, or
                      custom pearl finishes.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Clear Coat & Finishing
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      A durable clear coat is applied to protect the finish
                      against UV, scratches, and corrosion. Wheels are then
                      cured and reassembled.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Benefits
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Unlimited custom colours and finishes" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Smooth, high-gloss professional appearance" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Easier to touch-up compared to powder coating" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Cost & Durability
                </Typography>
                <Typography paragraph>
                  Wet spraying typically costs £250–£350 for a set of four
                  wheels. While not as tough as powder coating, proper care and
                  quality clear coats ensure a long-lasting, vibrant finish.
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Common Finishes
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Gloss Black – Sleek and shiny for a premium look" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Matte Black – Subtle and modern" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Metallic Silver or Gunmetal – Classic finishes" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Custom Candy or Pearl – For unique style" />
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
