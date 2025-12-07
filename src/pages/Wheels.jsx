import React, { useState, useMemo, useEffect } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

const Wheels = () => {
  const { wheelsStock = [] } = useSelector((state) => state.productStock);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const navigate = useNavigate();
  // ✅ State for filters
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
  const [searchParams] = useSearchParams(); // ✅ Access query params

  // ✅ Load params from URL and set state
  useEffect(() => {
    const make = searchParams.get("make");
    const model = searchParams.get("model");
    const year = searchParams.get("year");
    const size = searchParams.get("size");

    if (make) setSelectedCategory(make);
    if (model) setSelectedModel(model);
    if (year) setSelectedYear(year);
    if (size) setSelectedSize(size);
  }, [searchParams]);

  const itemsPerPage = 8;

  // ✅ Filter logic
  const filteredWheels = wheelsStock.filter((wheel) => {
    const categories = Array.isArray(wheel.category)
      ? wheel.category.map((c) => c.toLowerCase())
      : [String(wheel.category || "").toLowerCase()];

    const models = Array.isArray(wheel.models)
      ? wheel.models.map((m) => m.toLowerCase())
      : [String(wheel.models || "").toLowerCase()];

    const years = Array.isArray(wheel.years)
      ? wheel.years.map((y) => y.toLowerCase())
      : [String(wheel.years || "").toLowerCase()];

    const wheelSize = String(wheel.wheelSize || "").toLowerCase();

    const categoryMatch =
      selectedCategory === "all" ||
      categories.includes(selectedCategory.toLowerCase());

    const modelMatch =
      selectedModel === "all" || models.includes(selectedModel.toLowerCase());

    const yearMatch =
      selectedYear === "all" || years.includes(selectedYear.toLowerCase());

    const sizeMatch =
      selectedSize === "all" || wheelSize === selectedSize.toLowerCase();

    const priceMatch =
      wheel.price >= priceRange[0] && wheel.price <= priceRange[1];

    return categoryMatch && modelMatch && yearMatch && sizeMatch && priceMatch;
  });

  // ✅ Sorting
  const sortedWheels = useMemo(() => {
    const sorted = [...filteredWheels];

    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "wheel-size":
        return sorted.sort(
          (a, b) => parseFloat(a.wheelSize || 0) - parseFloat(b.wheelSize || 0)
        );
      default:
        return sorted;
    }
  }, [filteredWheels, sortBy]);

  // ✅ Pagination
  const totalPages = Math.ceil(sortedWheels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWheels = sortedWheels.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = (index) => {
    setStartImage(index);
    setIsOpen(true);
  };
  const handleAddToCart = (wheel) => {
    const obj = {
      ...wheel,
      type: "wheel",
    };
    addToCart(obj);
  };

  const handleViewDetails = (wheel) => {
    navigate(`/product/${wheel.id}`, { state: { type: "wheel" } });
  };

  // ✅ Wheel Card
  const WheelCard = ({ wheel }) => (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={wheel.images?.[0] || "/placeholder.svg"}
          alt={wheel.name}
          sx={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() => {
            setImage(wheel?.images);
            openLightbox(0);
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {wheel.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {wheel.sku}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          £{wheel.price}
        </Typography>
        <Typography variant="body2">{wheel.wheelSize}"</Typography>
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
            onClick={() => handleAddToCart(wheel)}
            disabled={wheel.quantity < 1}
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
            onClick={() => handleViewDetails(wheel)}
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
          Tottenham Wheels Collection
        </Typography>
        <Typography sx={{ opacity: 0.8 }}>
          Premium alloy and forged wheels for Mercedes, BMW & more.
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
              wheelsStock={wheelsStock}
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
                  <MenuItem value="wheel-size">Wheel Size</MenuItem>{" "}
                  {/* ✅ Added */}
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
              {currentWheels.map((wheel) => (
                <Grid
                  item
                  key={wheel.id}
                  size={{
                    xs: viewMode === "grid" ? 12 : 12,
                    sm: viewMode === "grid" ? 12 : 12,
                    md: viewMode === "grid" ? 4 : 6,
                    lg: viewMode === "grid" ? 3 : 6,
                  }}
                >
                  <WheelCard wheel={wheel} />
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

export default Wheels;
