import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Autocomplete,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import "./filterStyles.css";
import { categoryService } from "../../services/categoryService";
import { useDispatch, useSelector } from "react-redux";
import { addCategoriesList } from "../../redux/slice/productStockSlice";
import { useNavigate } from "react-router-dom";

export default function MainFilters() {
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const { categoriesList } = useSelector((state) => state.productStock);

  // ✅ Fetch categories with models
  const handleFetchCategories = async () => {
    const data = await categoryService.getAllCategoriesWithModels();
    dispatch(addCategoriesList(data));
  };

  useEffect(() => {
    handleFetchCategories();
  }, []);

  // ✅ Derive data for dropdowns
  const makes = categoriesList?.map((cat) => cat.name) || [];
  const selectedCategory = categoriesList?.find((cat) => cat.name === make);
  const models = selectedCategory?.models?.map((m) => m.name) || [];
  const selectedModel = selectedCategory?.models?.find((m) => m.name === model);
  const years = selectedModel?.years || [];
  const sizes = selectedModel?.type || [];

  // ✅ Handle search and route navigation
  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (make) queryParams.append("make", make);
    if (model) queryParams.append("model", model);
    if (year) queryParams.append("year", year);
    if (size) queryParams.append("size", size);

    // Navigate to /wheels with query parameters
    navigate(`/wheels?${queryParams.toString()}`);
  };

  return (
    <Box className={isMobile ? "mobile_container" : "disktop_container"}>
      <Card
        sx={{
          bgcolor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          width: isMobile ? "100%" : "70%",
          mx: "auto",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1a1a1a" }}
          >
            Find Your Perfect Wheels
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            By selecting your car make, model, year, and desired alloy size.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 2,
              alignItems: isMobile ? "stretch" : "center",
            }}
          >
            {/* Vehicle Make */}
            <Autocomplete
              fullWidth
              sx={{ flex: 1 }}
              options={makes}
              value={make}
              onChange={(e, newValue) => {
                setMake(newValue);
                setModel(null);
                setYear(null);
                setSize(null);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Vehicle Make"
                  variant="outlined"
                />
              )}
            />

            {/* Vehicle Model */}
            <Autocomplete
              fullWidth
              sx={{ flex: 1 }}
              options={models}
              value={model}
              onChange={(e, newValue) => {
                setModel(newValue);
                setYear(null);
                setSize(null);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Vehicle Model"
                  variant="outlined"
                />
              )}
              disabled={!make}
            />

            {/* Vehicle Year */}
            <Autocomplete
              fullWidth
              sx={{ flex: 1 }}
              options={years}
              value={year}
              onChange={(e, newValue) => setYear(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Year" variant="outlined" />
              )}
              disabled={!model}
            />

            {/* Tyre Size */}
            <Autocomplete
              fullWidth
              sx={{ flex: 1 }}
              options={sizes}
              value={size}
              onChange={(e, newValue) => setSize(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Tyre Size" variant="outlined" />
              )}
              disabled={!model}
            />

            {/* Search Button */}
            <Button
              variant="contained"
              size="large"
              fullWidth={isMobile}
              startIcon={<Search />}
              onClick={handleSearch}
              sx={{
                py: 1.5,
                px: 4,
                flexShrink: 0,
                bgcolor: "#EB3300",
                "&:hover": { bgcolor: "#c62800" },
              }}
            >
              Search
            </Button>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              mt: 2,
              color: "text.secondary",
            }}
          >
            Need help? Call us on{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              0800 123 4567
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
