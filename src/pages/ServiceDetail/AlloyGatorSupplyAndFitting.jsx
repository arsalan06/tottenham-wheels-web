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
import alloygatorImg from "../../assets/services/Alloy-gator/Alloygator.png";
export default function AlloyGatorSupplyAndFittingPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", mb: 4 }}>
      <Navigation />

      {/* Hero Section */}
      <Banner
        title={"AlloyGator Supply and Fitting"}
        des={
          "Protect your alloy wheels from curb damage with stylish, durable AlloyGator rim protectors — professionally supplied and fitted for a perfect finish."
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
                image={alloygatorImg}
                alt="AlloyGator wheel protectors"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                >
                  AlloyGator Wheel Protectors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  AlloyGator protectors are engineered from durable nylon
                  composite to defend against curb damage, scuffs, and scratches
                  while enhancing your vehicle’s appearance.
                </Typography>
              </CardContent>
            </Card>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Rim Protection" />
              <Chip label="Stylish Colours" />
              <Chip label="Professional Fitting" />
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
                  AlloyGator wheel protectors are a premium, durable solution
                  designed to safeguard alloy wheels from curb damage and minor
                  impacts. Professionally supplied and fitted, these protectors
                  not only prevent damage but also offer a stylish way to
                  customize your car’s look.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Fitting Process
                </Typography>

                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Wheel Cleaning & Inspection
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Each wheel is thoroughly cleaned and inspected to ensure a
                      debris-free surface for a secure and even fit.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Measurement & Preparation
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The correct size AlloyGator is selected based on your
                      wheel dimensions and prepared for a seamless installation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Application</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The protector is carefully fitted between the tire and the
                      rim using a special tool, ensuring a tight and secure
                      connection.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">
                      Finishing & Quality Check
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Each wheel is inspected for alignment and fit before
                      finishing touches are applied, leaving a smooth, stylish
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
                    <ListItemText primary="Prevents curb rash and scuffs" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Durable nylon composite construction" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Available in multiple colour options" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Easy to maintain and clean" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Cost-effective alternative to wheel repair" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Professional fitting ensures perfect alignment" />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Why Choose Professional Fitting?
                </Typography>
                <Typography paragraph>
                  Expert installation guarantees a perfect fit without damaging
                  your tires or rims. Professionals use specialized tools and
                  techniques for secure placement and optimal longevity.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" fontWeight="bold">
                  Available Colours
                </Typography>
                <Typography paragraph>
                  Choose from a variety of vibrant shades, including black,
                  silver, red, blue, and more — to complement your vehicle’s
                  style or create a standout look.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
