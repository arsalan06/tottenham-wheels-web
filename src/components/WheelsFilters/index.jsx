import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Slider,
  Button,
  TextField,
} from "@mui/material";
import { Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import { addCategoriesList } from "../../redux/slice/productStockSlice";
import { categoryService } from "../../services/categoryService";
import { useLocation, useNavigate } from "react-router-dom";

const WheelsFilters = ({
  selectedCategory,
  selectedModel,
  selectedYear,
  selectedSize,
  priceRange,
  setSelectedCategory,
  setSelectedModel,
  setSelectedYear,
  setSelectedSize,
  setPriceRange,
}) => {
  const { categoriesList } = useSelector((state) => state.productStock);

  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [sizes, setSizes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleFetchCategories = async () => {
    const data = await categoryService.getAllCategoriesWithModels();
    dispatch(addCategoriesList(data));
  };

  useEffect(() => {
    handleFetchCategories();
  }, []);
  // When Category (Make) changes
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const selectedCat = categoriesList?.find(
      (cat) => cat.name === selectedCategory
    );

    if (selectedCat) {
      setModels(selectedCat.models.map((m) => m.name));
    } else {
      setModels([]);
    }

    // ✅ Only reset dependent filters if it's not the first load
    if (!initialLoad) {
      setSelectedModel("all");
      setSelectedYear("all");
      setSelectedSize("all");
    }
  }, [selectedCategory, categoriesList]);

  useEffect(() => {
    if (categoriesList.length > 0) {
      setInitialLoad(false); // ✅ Mark that initial params are applied
    }
  }, [categoriesList]);

  // When Model changes
  useEffect(() => {
    const selectedCat = categoriesList?.find(
      (cat) => cat.name === selectedCategory
    );
    const selectedMod = selectedCat?.models?.find(
      (m) => m.name === selectedModel
    );

    if (selectedMod) {
      setYears(selectedMod.years || []);
      setSizes(selectedMod.type || []);
    } else {
      setYears([]);
      setSizes([]);
    }

    if (!initialLoad) {
      setSelectedYear("all");
      setSelectedSize("all");
    }
  }, [selectedModel, selectedCategory, categoriesList]);

  const handleClear = () => {
    setSelectedCategory("all");
    setSelectedModel("all");
    setSelectedYear("all");
    setSelectedSize("all");
    setPriceRange([0, 2000]);
    // ✅ Strip query string completely
    navigate(location.pathname, { replace: true });
  };

  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Filter size={20} />
          <Typography variant="h6" sx={{ fontWeight: "bold", ml: 1 }}>
            Filters
          </Typography>
        </Box>

        {/* Category / Make */}
        <Autocomplete
          options={["all", ...categoriesList.map((cat) => cat.name)]}
          getOptionLabel={(option) => option}
          value={selectedCategory}
          onChange={(e, val) => setSelectedCategory(val || "all")}
          renderInput={(params) => (
            <TextField {...params} label="Make" fullWidth margin="normal" />
          )}
        />

        {/* Model */}
        <Autocomplete
          options={["all", ...models]}
          value={selectedModel}
          onChange={(e, val) => setSelectedModel(val || "all")}
          renderInput={(params) => (
            <TextField {...params} label="Model" fullWidth margin="normal" />
          )}
        />

        {/* Year */}
        <Autocomplete
          options={["all", ...years]}
          value={selectedYear}
          onChange={(e, val) => setSelectedYear(val || "all")}
          renderInput={(params) => (
            <TextField {...params} label="Year" fullWidth margin="normal" />
          )}
        />

        {/* Size */}
        <Autocomplete
          options={["all", ...sizes]}
          value={selectedSize}
          onChange={(e, val) => setSelectedSize(val || "all")}
          renderInput={(params) => (
            <TextField {...params} label="Size" fullWidth margin="normal" />
          )}
        />

        {/* Price Range */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Price Range: £{priceRange[0]} - £{priceRange[1]}
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, val) => setPriceRange(val)}
            min={0}
            max={2000}
            step={50}
            valueLabelDisplay="auto"
          />
        </Box>

        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleClear}
        >
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default WheelsFilters;
