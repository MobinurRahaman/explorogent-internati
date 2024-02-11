import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceChip from "../common/Chip/ServiceChip";

export default function ServiceCategorySection() {
  return (
    <Box sx={{ my: "80px", mx: "-40px" }}>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          textAlign: "center",
          color: "#36454F",
        }}
      >
        In the realm of digital solutions, we offer expertise in
      </Typography>

      <Box
        my="20px"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap="20px"
      >
        <ServiceChip label="Website Development" />
        <ServiceChip label="App Development" />
        <ServiceChip label="UI/UX Design" />
        <ServiceChip label="Digital Marketing" />
        <ServiceChip label="SEO Optimization" />
      </Box>

      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          textAlign: "center",
          color: "#36454F",
        }}
      >
        showcasing our proficiency across various facets of the digital platform{" "}
      </Typography>
    </Box>
  );
}
