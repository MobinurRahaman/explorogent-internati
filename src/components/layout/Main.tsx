import { Box } from "@mui/material";
import React from "react";
import LandingSection from "../landing/LandingSection";
import ServiceCategorySection from "../servicecategory/ServiceCategorySection";

export default function Main() {
  return (
    <Box
      sx={{
        p: "40px 80px",
        background:
          "linear-gradient(90deg, rgba(10, 86, 241, 0.1), rgba(230, 143, 80, 0.1))",
      }}
    >
      <LandingSection />
      <ServiceCategorySection />
    </Box>
  );
}
