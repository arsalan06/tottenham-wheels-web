import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import {
  Award,
  Users,
  MapPin,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  const theme = useTheme();
  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "25+", label: "Years Experience", icon: Calendar },
    { number: "15", label: "Locations Nationwide", icon: MapPin },
    { number: "98%", label: "Customer Satisfaction", icon: Star },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We only stock premium brands and provide professional installation services.",
      icon: Award,
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We go the extra mile for every customer.",
      icon: Users,
    },
    {
      title: "Expert Knowledge",
      description:
        "Our certified technicians have decades of combined experience in the industry.",
      icon: CheckCircle,
    },
  ];

  const timeline = [
    {
      year: "1998",
      title: "Company Founded",
      description:
        "Started as a small family business with a single location in London.",
    },
    {
      year: "2005",
      title: "Expansion Begins",
      description:
        "Opened our second location and started offering mobile fitting services.",
    },
    {
      year: "2010",
      title: "Online Presence",
      description: "Launched our first website and began online tyre sales.",
    },
    {
      year: "2015",
      title: "Nationwide Coverage",
      description:
        "Reached 10 locations across the UK with over 20,000 satisfied customers.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description:
        "Introduced advanced booking systems and contactless payment options.",
    },
    {
      year: "2024",
      title: "Leading Provider",
      description:
        "Now serving 50,000+ customers across 15 locations with industry-leading service.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main}CC 100%)`,
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
            About TyreShop Pro
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 4, maxWidth: "600px" }}
          >
            Over 25 years of experience in providing premium tyres, wheels, and
            professional fitting services across the UK.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Stats Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
                key={stat.label}
              >
                <Card sx={{ textAlign: "center", height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                    >
                      <stat.icon
                        size={32}
                        color={theme.palette.secondary.main}
                      />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Story Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                Our Story
              </Typography>
              <Box sx={{ color: "text.secondary", "& p": { mb: 2 } }}>
                <Typography paragraph>
                  Founded in 1998 by automotive enthusiasts John and Sarah
                  Mitchell, TyreShop Pro began as a small family business with a
                  simple mission: to provide high-quality tyres and exceptional
                  service to every customer.
                </Typography>
                <Typography paragraph>
                  What started as a single workshop in Central London has grown
                  into one of the UK's most trusted tyre retailers, with 15
                  locations nationwide and a team of over 100 dedicated
                  professionals.
                </Typography>
                <Typography paragraph>
                  Today, we're proud to serve over 50,000 satisfied customers
                  annually, offering everything from budget-friendly options to
                  premium performance tyres, all backed by our commitment to
                  quality and customer satisfaction.
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                component="img"
                src="/placeholder.svg"
                alt="TyreShop Pro team"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                key={value.title}
              >
                <Card sx={{ textAlign: "center", height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        bgcolor: "secondary.light",
                        borderRadius: "50%",
                        width: 64,
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <value.icon
                        size={32}
                        color={theme.palette.secondary.main}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                      {value.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
          >
            Our Journey
          </Typography>
          <Grid container spacing={4}>
            {timeline.map((item, index) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                key={item.year}
              >
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={item.year}
                      color="primary"
                      sx={{ color: "white", mb: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Card
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main}CC 100%)`,
              color: "white",
            }}
          >
            <CardContent sx={{ p: 6, textAlign: "center" }}>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                Meet Our Team
              </Typography>
              <Typography
                variant="h6"
                sx={{ opacity: 0.9, mb: 4, maxWidth: "800px", mx: "auto" }}
              >
                Our success is built on the expertise and dedication of our
                team. From certified technicians to customer service
                specialists, every team member is committed to providing you
                with the best possible experience.
              </Typography>

              <Grid
                container
                spacing={4}
                sx={{ maxWidth: "800px", mx: "auto" }}
              >
                {[
                  { name: "John Mitchell", role: "Founder & CEO" },
                  {
                    name: "Sarah Mitchell",
                    role: "Co-Founder & Operations Director",
                  },
                  { name: "David Thompson", role: "Technical Director" },
                ].map((member) => (
                  <Grid
                    item
                    size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                    key={member.name}
                  >
                    <Box>
                      <Box
                        component="img"
                        src="/placeholder.svg"
                        alt={member.name}
                        sx={{
                          width: 128,
                          height: 128,
                          borderRadius: "50%",
                          mx: "auto",
                          mb: 2,
                          objectFit: "cover",
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {member.name}
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        {member.role}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Call to Action */}
        <Card>
          <CardContent sx={{ p: 6, textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Ready to Experience the Difference?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of satisfied customers who trust TyreShop Pro for
              all their tyre needs.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button variant="contained" size="large">
                Shop Tyres Now
              </Button>
              <Button variant="outlined" size="large">
                Find a Location
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
