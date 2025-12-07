// routes/SpacersRoute.jsx
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Pagination,
  Box,
  Container,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { getAllSpacers } from "../../services/spacerService";
// import { AuthContext } from "../../context/AuthContext";
// import { filter_container } from "./styles";
// import {
//   Add as AddIcon,
//   Delete,
//   Edit,
//   ShoppingCart,
// } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import SnackbarCom from "../../components/Snackbar";
// import AlertDialogSlide from "../../components/AlertDialogSlide/AlertDialogSlide";
// import SummaryCard from "../../components/SummaryCard";
// import ProductDetailModal from "../../components/ProductDetail";
// import ProductQuantity from "../../components/productQuantity/ProductQuantity";
import Lightbox from "yet-another-react-lightbox";
import { ShoppingCart } from "lucide-react";
import { Visibility } from "@mui/icons-material";
import AccessoriesDetail from "../AccessoriesDetail";
import { useCart } from "../../context/CartContext";
const ITEMS_PER_PAGE = 6;

export default function SpacersRoute() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [images, setImage] = useState([]);
  const [spacers, setSpacers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { addToCart } = useCart();
  const [productDetailModal, setProductDetailModal] = useState({ type: "" });
  const openLightbox = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };
  const fetchData = async () => {
    try {
      const data = await getAllSpacers();
      setSpacers(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error fetching spacers:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Handle search
  useEffect(() => {
    const lower = search.toLowerCase();
    const result = spacers.filter(
      (s) =>
        s.sku?.toLowerCase().includes(lower) ||
        s.color?.toLowerCase().includes(lower)
    );
    setFiltered(result);
    setPage(1); // reset to first page after search
  }, [search, spacers]);

  // ✅ Pagination slice
  const tempIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(tempIndex, tempIndex + ITEMS_PER_PAGE);
  const handleAddToCart = (data) => {
    const obj = {
      ...data,
      type: "spacers",
    };
    addToCart(obj);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4, minHeight: "100vh", backgroundColor: "background.default" }}
    >
      {isOpen && images.length > 0 && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((url) => ({ src: url }))}
          index={startIndex}
        />
      )}
      {/* <ProductQuantity
        productDetail={productDetail}
        setProductDetail={setProductDetail}
      /> */}
      <AccessoriesDetail
        productDetail={productDetailModal}
        setProductDetail={setProductDetailModal}
      />
      {/*<SnackbarCom open={open} handleClose={handleClose} />
      <AlertDialogSlide
        openAlert={openAlert}
        setAlertOpen={setAlertOpen}
        handleRemoveResponse={handleRemoveResponse}
      /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography variant="page_title">Spacers List</Typography>
        <Box>
          <TextField
            id="outlined-basic"
            label="Search spacers..."
            value={search}
            sx={{ mr: 4 }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
      {/* Spacer Cards */}
      <Grid container spacing={3} mt={2}>
        {paginated.map((spacer) => (
          <Grid item size={{ xs: 12, sm: 12, md: 3, lg: 3 }} key={spacer.id}>
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
                  image={spacer.images?.[0] || "/placeholder.svg"}
                  alt={spacer.name}
                  sx={{ objectFit: "cover", cursor: "pointer" }}
                  onClick={() => {
                    setImage(spacer?.images);
                    openLightbox(0);
                  }}
                />
              </Box>
              <CardContent
                sx={{ cursor: "pointer" }}
                // onClick={() => setProductDetailModal(spacer)}
              >
                <Typography variant="h6">{spacer.name}</Typography>
                <Stack
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                >
                  <Typography fontWeight="bold">
                    SKU: {spacer.sku || "N/A"}
                  </Typography>
                  <Typography color="error" fontWeight={600}>
                    {spacer.quantity}
                  </Typography>
                </Stack>
                <Typography color="text.secondary">
                  Color: {spacer.color || "N/A"}
                </Typography>
                <Typography fontWeight="bold">
                  Price: £{spacer.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mt: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<ShoppingCart />}
                    onClick={() => handleAddToCart(spacer)}
                    disabled={spacer.quantity < 1}
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
                    onClick={() => setProductDetailModal(spacer)}
                    sx={{ minWidth: "auto", px: 2 }}
                  >
                    <Visibility />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 📑 Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={Math.ceil(filtered.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Container>
  );
}
