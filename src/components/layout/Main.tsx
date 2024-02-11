import { Box } from "@mui/material";
import React from "react";
import LandingSection from "../landing/LandingSection";
import ServiceCategorySection from "../servicecategory/ServiceCategorySection";
import LaunchProjectSection from "../launchproject/LaunchProjectSection";
import OurStorySection from "../ourstory/OurStorySection";
import WhyChooseUsSection from "../whychooseus/WhyChooseUsSection";
import DigitalServicesSection from "../digitalservices/DigitalServicesSection";
import SEOServicesSection from "../seo/SEOServicesSection";
import HiringAndPlacementServices from "../hiringandplacement/HiringAndPlacementServices";

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
      <LaunchProjectSection />
      <OurStorySection />
      <WhyChooseUsSection />
      <DigitalServicesSection />
      <SEOServicesSection />
      <HiringAndPlacementServices />
    </Box>
  );
}
