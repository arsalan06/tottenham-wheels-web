// routes/SpacersRoute.jsx
import React, { useEffect, useState } from "react";
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
  Stack,
} from "@mui/material";
import { getAllSpacers } from "../../services/spacerService";
import Lightbox from "yet-another-react-lightbox";
import { ShoppingCart } from "lucide-react";
import { Visibility } from "@mui/icons-material";
import AccessoriesDetail from "../AccessoriesDetail";
import { useCart } from "../../context/CartContext";
import { getAllAdapters } from "../../services/adapterService";
const ITEMS_PER_PAGE = 6;

export default function Adapters() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [images, setImage] = useState([]);
  const [adapters, setAdapters] = useState([]);
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
      const data = await getAllAdapters();
      setAdapters(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error fetching adapters:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Handle search
  useEffect(() => {
    const lower = search.toLowerCase();
    const result = adapters.filter(
      (s) =>
        s.sku?.toLowerCase().includes(lower) ||
        s.color?.toLowerCase().includes(lower)
    );
    setFiltered(result);
    setPage(1); // reset to first page after search
  }, [search, adapters]);

  // ✅ Pagination slice
  const tempIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(tempIndex, tempIndex + ITEMS_PER_PAGE);
  const handleAddToCart = (data) => {
    const obj = {
      ...data,
      type: "adapter",
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
      <AccessoriesDetail
        productDetail={productDetailModal}
        setProductDetail={setProductDetailModal}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography variant="page_title">Adapters List</Typography>
        <Box>
          <TextField
            id="outlined-basic"
            label="Search adapters..."
            value={search}
            // sx={{ mr: 4 }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
      {/* Spacer Cards */}
      <Grid container spacing={3} mt={2}>
        {paginated.map((adapter) => (
          <Grid item size={{ xs: 12, sm: 12, md: 3, lg: 3 }} key={adapter.id}>
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
                  image={adapter.images?.[0] || "/placeholder.svg"}
                  alt={adapter.name}
                  sx={{ objectFit: "cover", cursor: "pointer" }}
                  onClick={() => {
                    setImage(adapter?.images);
                    openLightbox(0);
                  }}
                />
              </Box>
              <CardContent
                sx={{ cursor: "pointer" }}
                // onClick={() => setProductDetailModal(adapter)}
              >
                <Typography variant="h6">{adapter.name}</Typography>
                <Stack
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                >
                  {adapter.type ? (
                    <Typography fontWeight="bold">
                      TYPE: {adapter.type || "N/A"}
                    </Typography>
                  ) : (
                    <Typography fontWeight="bold">
                      SKU: {adapter.sku || "N/A"}
                    </Typography>
                  )}

                  <Typography color="error" fontWeight={600}>
                    {adapter.quantity}
                  </Typography>
                </Stack>
                {adapter.type && (
                  <Typography fontWeight="bold">
                    SKU: {adapter.sku || "N/A"}
                  </Typography>
                )}
                <Typography color="text.secondary">
                  Color: {adapter.color || "N/A"}
                </Typography>
                <Typography fontWeight="bold">
                  Price: £{adapter.price}
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
                    onClick={() => handleAddToCart(adapter)}
                    disabled={adapter.quantity < 1}
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
                    onClick={() => setProductDetailModal(adapter)}
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
