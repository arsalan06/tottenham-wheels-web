import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  TextField,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  Container,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ShoppingCart,
  Search,
  Phone,
} from "@mui/icons-material";
import { useCart } from "../context/CartContext";
import { useIsMobile } from "../hooks/use-mobile";

const Navigation = ({ isBg }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 👈 track scroll position
  const navigate = useNavigate();
  const { getTotalItems, toggleCart } = useCart();
  const isMobile = useIsMobile();
  const navItems = [
    { id: 1, name: "Wheels", href: "/wheels" },
    { id: 2, name: "Tyres", href: "/tyres" },
    { id: 3, name: "Accessories", href: "/accessories" },
    { id: 4, name: "Services", href: "/services" },
    { id: 5, name: "About", href: "/about" },
    { id: 6, name: "Contact", href: "/contact" },
  ];

  // 👇 Detect scroll to change AppBar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (href) => {
    navigate(href);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            // button
            key={item.id}
            onClick={() => handleNavigation(item.href)}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search tyres..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isBg
            ? "primary.main"
            : scrolled && !isBg
            ? "primary.main"
            : "transparent",
          boxShadow: scrolled ? 3 : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          {!isMobile && (
            <Stack display="flex" flexDirection="row" gap={4} mb={2} pl={2}>
              <Stack display="flex" flexDirection="row" gap={1}>
                <Phone sx={{ color: "#FFFFFF", fontSize: 20 }} />
                <Typography variant="body2" color="inherit">
                  +44 7886 644561
                </Typography>
              </Stack>
              <Stack display="flex" flexDirection="row" gap={1}>
                <Phone sx={{ color: "#FFFFFF", fontSize: 20 }} />
                <Typography variant="body2" color="inherit">
                  MON-SAT (9am-6:30pm)
                </Typography>
              </Stack>
              <Stack display="flex" flexDirection="row" gap={1}>
                <Phone sx={{ color: "#FFFFFF", fontSize: 20 }} />
                <Typography variant="body2" color="inherit">
                  tottenhamwheels17@gmail.com
                </Typography>
              </Stack>
            </Stack>
          )}
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "70px",
              paddingLeft: "0px !important", // ✅ override MUI default padding
              paddingRight: "0px !important",
            }}
          >
            {/* Logo */}
            <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
              <img src="http://tottenhamwheels.com/wp-content/uploads/2024/01/tottenhamwheels-3.png" />
            </Box>
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    color="inherit"
                    onClick={() => handleNavigation(item.href)}
                    sx={{
                      textTransform: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Search Bar - Desktop */}
            {/* {!isMobile && (
              <Box sx={{ flexGrow: 1, maxWidth: 300, mx: 3 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search tyres..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255,255,255,0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255,255,255,0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255,255,255,0.7)",
                      opacity: 1,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: "rgba(255,255,255,0.7)" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            )} */}

            {/* Right side actions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Phone Number - Desktop */}
              {/* {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone sx={{ color: "#EB3300", fontSize: 20 }} />
                  <Typography variant="body2" color="inherit">
                    0800 123 4567
                  </Typography>
                </Box>
              )} */}

              {/* Cart Button */}
              <IconButton
                color="inherit"
                onClick={toggleCart}
                sx={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <Badge badgeContent={getTotalItems()} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {/* Mobile menu button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
