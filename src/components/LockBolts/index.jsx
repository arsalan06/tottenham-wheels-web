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
import Lightbox from "yet-another-react-lightbox";
import { ShoppingCart } from "lucide-react";
import { Visibility } from "@mui/icons-material";
import AccessoriesDetail from "../AccessoriesDetail";
import { useCart } from "../../context/CartContext";
import { getAllLockBolts } from "../../services/lockBoltService";
const ITEMS_PER_PAGE = 6;

export default function BoltCovers() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [images, setImage] = useState([]);
  const [boltCovers, setBoltCovers] = useState([]);
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
      const data = await getAllLockBolts();
      setBoltCovers(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error fetching boltCovers:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Handle search
  useEffect(() => {
    const lower = search.toLowerCase();
    const result = boltCovers.filter(
      (s) =>
        s.sku?.toLowerCase().includes(lower) ||
        s.color?.toLowerCase().includes(lower)
    );
    setFiltered(result);
    setPage(1); // reset to first page after search
  }, [search, boltCovers]);

  // ✅ Pagination slice
  const tempIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(tempIndex, tempIndex + ITEMS_PER_PAGE);
  const handleAddToCart = (data) => {
    const obj = {
      ...data,
      type: "boltCovers",
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
        <Typography variant="page_title">Lock Bolts List</Typography>
        <Box>
          <TextField
            id="outlined-basic"
            label="Search boltCovers..."
            value={search}
            // sx={{ mr: 4 }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
      {/* Spacer Cards */}
      <Grid container spacing={3} mt={2}>
        {paginated.map((boltCover) => (
          <Grid item size={{ xs: 12, sm: 12, md: 3, lg: 3 }} key={boltCover.id}>
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
                  image={boltCover.images?.[0] || "/placeholder.svg"}
                  alt={boltCover.name}
                  sx={{ objectFit: "cover", cursor: "pointer" }}
                  onClick={() => {
                    setImage(boltCover?.images);
                    openLightbox(0);
                  }}
                />
              </Box>
              <CardContent
                sx={{ cursor: "pointer" }}
                // onClick={() => setProductDetailModal(boltCover)}
              >
                <Typography variant="h6">{boltCover.name}</Typography>
                <Stack
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                >
                  {boltCover.type ? (
                    <Typography fontWeight="bold">
                      TYPE: {boltCover.type || "N/A"}
                    </Typography>
                  ) : (
                    <Typography fontWeight="bold">
                      SKU: {boltCover.sku || "N/A"}
                    </Typography>
                  )}

                  <Typography color="error" fontWeight={600}>
                    {boltCover.quantity}
                  </Typography>
                </Stack>
                {boltCover.type && (
                  <Typography fontWeight="bold">
                    SKU: {boltCover.sku || "N/A"}
                  </Typography>
                )}
                <Typography color="text.secondary">
                  Color: {boltCover.color || "N/A"}
                </Typography>
                <Typography fontWeight="bold">
                  Price: £{boltCover.price}
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
                    onClick={() => handleAddToCart(boltCover)}
                    disabled={boltCover.quantity < 1}
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
                    onClick={() => setProductDetailModal(boltCover)}
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
