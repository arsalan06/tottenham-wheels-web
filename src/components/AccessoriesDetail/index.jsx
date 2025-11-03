import React from "react";
import {
  DialogTitle,
  IconButton,
  Dialog,
  styled,
  DialogContent,
  Typography,
  Box,
  Chip,
  Grid,
  Card,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AccessoriesDetail = ({ productDetail, setProductDetail }) => {
  if (!productDetail) return null;

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const formatValue = (value, key) => {
    if (Array.isArray(value)) return value; // handled as chips later

    // Firestore Timestamp
    if (
      value &&
      typeof value === "object" &&
      value.seconds !== undefined &&
      value.nanoseconds !== undefined
    ) {
      try {
        return new Date(value.seconds * 1000).toLocaleString();
      } catch {
        return String(value);
      }
    }

    // Format date-like fields
    if (
      (key.toLowerCase().includes("date") ||
        key.toLowerCase().includes("created") ||
        key.toLowerCase().includes("updated")) &&
      (typeof value === "string" || value instanceof Date)
    ) {
      const dateObj = value instanceof Date ? value : new Date(value);
      if (!isNaN(dateObj)) return dateObj.toLocaleString();
    }

    return value ?? "-";
  };

  return (
    <BootstrapDialog
      fullWidth
      maxWidth="md"
      aria-labelledby="customized-dialog-title"
      open={!!productDetail?.id}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} variant="page_title">
        Product Detail
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={() => setProductDetail(null)}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        {/* ✅ Show Images on Top */}
        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item size={{ sm: 12, md: 6, lg: 6 }}>
            {/* {productDetail.images && Array.isArray(productDetail.images) && (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 2,
                  justifyContent: "center",
                }}
              >
                {productDetail.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`productDetail-${i}`}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: 6,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  />
                ))}
              </Box>
            )} */}
            <Card>
              <Box sx={{ position: "relative", p: 3 }}>
                {productDetail?.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={productDetail?.name}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
                      borderRadius: 8,
                    }}
                  />
                ))}
                {productDetail?.quantity &&
                parseInt(productDetail?.quantity) > 0 ? (
                  <Chip
                    label="In Stock"
                    color="success"
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  />
                ) : (
                  <Chip
                    label="Out of Stock"
                    color="error"
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  />
                )}
              </Box>
            </Card>
          </Grid>
          {/* ✅ Product Detail Table */}
          <Grid item size={{ sm: 12, md: 6, lg: 6 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {Object.entries(productDetail).map(([key, value]) => {
                    // 🚫 Skip unwanted fields
                    if (
                      key.toLowerCase().includes("id") ||
                      key === "images" ||
                      key === "originalPrice" ||
                      key === "createdAt" ||
                      key === "updatedAt"
                    )
                      return null;

                    const formattedValue = formatValue(value, key);

                    return (
                      <TableRow key={key}>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            backgroundColor: "#f9f9f9",
                            width: "30%",
                            textTransform: "capitalize",
                          }}
                        >
                          {formatKey(key)}
                        </TableCell>
                        <TableCell>
                          {Array.isArray(formattedValue) ? (
                            <Box
                              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                            >
                              {formattedValue.map((item, i) => (
                                <Chip key={i} label={String(item)} />
                              ))}
                            </Box>
                          ) : (
                            <Typography>{String(formattedValue)}</Typography>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default AccessoriesDetail;
