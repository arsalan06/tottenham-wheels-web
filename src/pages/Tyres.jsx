// src/pages/tyresStock.jsx
import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Pagination,
} from "@mui/material";
import { Grid as GridIcon, List, ShoppingCart } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import WheelsFilters from "../components/WheelsFilters";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Visibility } from "@mui/icons-material";
const Tyres = () => {
  const navigate = useNavigate();
  const { tyresStock = [] } = useSelector((state) => state.productStock);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedModel, setSelectedModel] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [startImage, setStartImage] = useState(0);
  const [images, setImage] = useState([]);
  const { addToCart } = useCart();
  const itemsPerPage = 8;
  const filteredTyres = tyresStock.filter((tyre) => {
    // normalize values (array or string) for safety
    const categories = Array.isArray(tyre.category)
      ? tyre.category.map((c) => c.toLowerCase())
      : [String(tyre.category || "").toLowerCase()];

    const models = Array.isArray(tyre.models)
      ? tyre.models.map((m) => m.toLowerCase())
      : [String(tyre.models || "").toLowerCase()];

    const years = Array.isArray(tyre.years)
      ? tyre.years.map((y) => y.toLowerCase())
      : [String(tyre.years || "").toLowerCase()];

    const tyreSize = String(tyre.tyreSize || "").toLowerCase();

    const categoryMatch =
      selectedCategory === "all" ||
      categories.includes(selectedCategory.toLowerCase());

    const modelMatch =
      selectedModel === "all" || models.includes(selectedModel.toLowerCase());

    const yearMatch =
      selectedYear === "all" || years.includes(selectedYear.toLowerCase());

    const sizeMatch =
      selectedSize === "all" || tyreSize === selectedSize.toLowerCase();

    const priceMatch =
      tyre.price >= priceRange[0] && tyre.price <= priceRange[1];

    return categoryMatch && modelMatch && yearMatch && sizeMatch && priceMatch;
  });

  // ✅ Sorting
  const sortedTyres = useMemo(() => {
    const sorted = [...filteredTyres];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "tyre-size":
        return sorted.sort(
          (a, b) => parseFloat(a.wheelSize || 0) - parseFloat(b.wheelSize || 0)
        );
      default:
        return sorted;
    }
  }, [filteredTyres, sortBy]);

  // ✅ Pagination
  const totalPages = Math.ceil(sortedTyres.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTyres = sortedTyres.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openLightbox = (index) => {
    setStartImage(index);
    setIsOpen(true);
  };
  const handleAddToCart = (tyre) => {
    const obj = {
      ...tyre,
      type: "tyre",
    };
    addToCart(obj);
  };

  const handleViewDetails = (tyre) => {
    navigate(`/product/${tyre.id}`, { state: { type: "tyre" } });
  };
  // ✅ Wheel Card
  const TyreCard = ({ tyre }) => (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={tyre.images?.[0] || "/placeholder.svg"}
          alt={tyre.name}
          sx={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() => {
            setImage(tyre?.images);
            openLightbox(0);
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {tyre.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {tyre.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          £{tyre.price}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {tyre.tyreSize}"
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            // position: "absolute",
            // bottom: 10,
          }}
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<ShoppingCart />}
            onClick={() => handleAddToCart(tyre)}
            disabled={tyre.quantity < 1}
            sx={{
              flex: 1,
              bgcolor: "#EB3300",
              "&:hover": { bgcolor: "#d12d00" },
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleViewDetails(tyre)}
            sx={{ minWidth: "auto", px: 2 }}
          >
            <Visibility />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navigation />

      <Box
        sx={{
          background: "#EB3300",
          color: "white",
          py: 8,
          textAlign: "center",
          pt: 18,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Tottenham Tyres Collection
        </Typography>
        <Typography sx={{ opacity: 0.8 }}>
          Premium Tyres for Mercedes, BMW & more.
        </Typography>
      </Box>
      {isOpen && images.length > 0 && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((url) => ({ src: url }))}
          index={startImage}
        />
      )}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {/* Filters Sidebar */}
          <Grid item size={{ sm: 12, md: 3, lg: 2 }}>
            <WheelsFilters
              tyresStock={tyresStock}
              selectedCategory={selectedCategory}
              selectedModel={selectedModel}
              selectedYear={selectedYear}
              selectedSize={selectedSize}
              priceRange={priceRange}
              setSelectedCategory={setSelectedCategory}
              setSelectedModel={setSelectedModel}
              setSelectedYear={setSelectedYear}
              setSelectedSize={setSelectedSize}
              setPriceRange={setPriceRange}
            />
          </Grid>

          {/* Products */}
          <Grid item size={{ sm: 12, md: 8, lg: 10 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <FormControl sx={{ minWidth: 160 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort By"
                >
                  <MenuItem value="popularity">Most Popular</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="name">Name A-Z</MenuItem>
                  <MenuItem value="tyre-size">Tyre Size</MenuItem>
                </Select>
              </FormControl>

              <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={(e, val) => val && setViewMode(val)}
              >
                <ToggleButton value="grid">
                  <GridIcon size={18} />
                </ToggleButton>
                <ToggleButton value="list">
                  <List size={18} />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Grid container spacing={3}>
              {currentTyres.map((tyre) => (
                <Grid
                  item
                  key={tyre.id}
                  size={{
                    xs: viewMode === "grid" ? 12 : 12,
                    sm: viewMode === "grid" ? 12 : 12,
                    md: viewMode === "grid" ? 4 : 6,
                    lg: viewMode === "grid" ? 3 : 6,
                  }}
                >
                  <TyreCard tyre={tyre} />
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Tyres;
