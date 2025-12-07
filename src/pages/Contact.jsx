import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Rating,
} from "@mui/material";
import { MapPin, Phone, Mail, Clock, MessageCircle, Star } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  const [subject, setSubject] = React.useState("");

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "0800 123 4567",
      secondary: "Mon-Fri: 8:00-18:00",
      color: "#2196F3",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@tyreshoppro.co.uk",
      secondary: "We'll respond within 24 hours",
      color: "#2196F3",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Available Now",
      secondary: "Mon-Sat: 9:00-17:00",
      color: "#4caf50",
    },
  ];

  const locations = [
    {
      name: "Central London",
      address: "123 High Street, London, SW1A 1AA",
      phone: "020 7123 4567",
      email: "london@tyreshoppro.co.uk",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-17:00, Sun: 10:00-16:00",
      rating: 4.8,
      services: ["Tyre Fitting", "Wheel Alignment", "MOT Testing"],
    },
    {
      name: "Birmingham",
      address: "456 Bull Ring, Birmingham, B1 1AA",
      phone: "0121 123 4567",
      email: "birmingham@tyreshoppro.co.uk",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-17:00, Sun: Closed",
      rating: 4.9,
      services: ["Tyre Fitting", "Mobile Service", "Emergency Repairs"],
    },
    {
      name: "Manchester",
      address: "789 Market Street, Manchester, M1 1AA",
      phone: "0161 123 4567",
      email: "manchester@tyreshoppro.co.uk",
      hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-17:00, Sun: 10:00-16:00",
      rating: 4.7,
      services: ["Tyre Fitting", "Wheel Balancing", "Fleet Services"],
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book online, call us, or visit any of our locations. We offer same-day appointments subject to availability.",
    },
    {
      question: "Do you offer mobile fitting services?",
      answer:
        "Yes! We provide mobile fitting services at your home or workplace. Additional charges may apply depending on location.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, PayPal, and bank transfers. Finance options are also available.",
    },
    {
      question: "Do you provide warranty on tyres?",
      answer:
        "All tyres come with manufacturer warranty. We also provide fitting warranty and road hazard protection options.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          background: "#EB3300",
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
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 4, maxWidth: "600px" }}
          >
            Have questions about our products or services? We're here to help
            you find the perfect solution for your vehicle.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Contact Methods */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
          >
            How Can We Help?
          </Typography>
          <Grid container spacing={3}>
            {contactInfo.map((info) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                key={info.title}
              >
                <Card sx={{ textAlign: "center", height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        bgcolor: "grey.100",
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
                      <info.icon size={32} color={info.color} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, color: "primary.main", mb: 1 }}
                    >
                      {info.primary}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.secondary}
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Form & Map */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Send Us a Message
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          placeholder="Enter your first name"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          placeholder="Enter your last name"
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                    />

                    <TextField
                      fullWidth
                      type="tel"
                      label="Phone"
                      placeholder="Enter your phone number"
                    />

                    <FormControl fullWidth>
                      <InputLabel>Subject</InputLabel>
                      <Select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        label="Subject"
                      >
                        <MenuItem value="general">General Enquiry</MenuItem>
                        <MenuItem value="booking">Service Booking</MenuItem>
                        <MenuItem value="complaint">Complaint</MenuItem>
                        <MenuItem value="feedback">Feedback</MenuItem>
                        <MenuItem value="warranty">Warranty Claim</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="Message"
                      placeholder="Tell us how we can help you..."
                    />

                    <Button variant="contained" size="large" fullWidth>
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Map Placeholder */}
            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 0, height: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: "grey.100",
                      height: "100%",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "400px",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <MapPin size={64} color="#2196F3" />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
                      >
                        Find Our Locations
                      </Typography>
                      <Typography color="text.secondary">
                        Interactive map showing all our service centers
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Locations */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
          >
            Our Locations
          </Typography>
          <Grid container spacing={3}>
            {locations.map((location) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                key={location.name}
              >
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <MapPin size={20} color="#2196F3" />
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {location.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Star size={16} color="#ffc107" />
                        <Typography variant="body2">
                          {location.rating}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {location.address}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Phone size={16} color="#2196F3" />
                        <Typography variant="body2">
                          {location.phone}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Mail size={16} color="#2196F3" />
                        <Typography variant="body2">
                          {location.email}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <Clock size={16} color="#2196F3" />
                        <Typography variant="body2">
                          {location.hours}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        Services Available:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {location.services.map((service) => (
                          <Chip key={service} label={service} size="small" />
                        ))}
                      </Box>
                    </Box>

                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Button variant="outlined" fullWidth>
                          Directions
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" fullWidth>
                          Call Now
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
          >
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3}>
            {faqs.map((faq) => (
              <Grid
                item
                size={{ xs: 12, sm: 12, md: 4, lg: 3 }}
                key={faq.question}
              >
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      {faq.question}
                    </Typography>
                    <Typography color="text.secondary">{faq.answer}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Emergency Contact */}
        <Card sx={{ border: 2, borderColor: "#EB3300", bgcolor: "#ffebee" }}>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "#EB3300" }}
            >
              Emergency Breakdown Service
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Tyre problems on the road? Our 24/7 emergency service is here to
              help.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Phone />}
                sx={{
                  bgcolor: "#EB3300",
                  "&:hover": { bgcolor: "#d12e00" },
                }}
              >
                Call Emergency: 0800 999 8888
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<MessageCircle />}
              >
                WhatsApp Support
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </Box>
  );
};

export default Contact;
