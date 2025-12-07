import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Banner = ({ title, des }) => {
  return (
    <Box
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main}CC 100%)`,
        color: "white",
        py: 8,
        pt: 18,
      }}
    >
      <Container maxWidth="xlg">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: "bold",
            mb: 3,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "rgba(255,255,255,0.8)", mb: 4, maxWidth: "600px" }}
        >
          {des}
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
