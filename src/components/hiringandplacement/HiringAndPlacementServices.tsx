import { Box, Typography } from "@mui/material";
import React from "react";
import HiringAndPlacementServicesCard from "../common/Card/HiringAndPlacementServicesCard";
import locationIcon from "@/app/assets/icons/locations.png";
import promotionIcon from "@/app/assets/icons/promotion.png";
import pinIcon from "@/app/assets/icons/pin.png";
import performanceIcon from "@/app/assets/icons/performance.png";
import badgeIcon from "@/app/assets/icons/badge.png";
import commitmentIcon from "@/app/assets/icons/commitment.png";

export default function HiringAndPlacementServices() {
  return (
    <Box sx={{ mt: "96px", mx: "-80px" }}>
      <Typography
        component="h4"
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: "40px",
          lineHeight: "50.4px",
          color: "#E68F50",
          textAlign: "center",
        }}
      >
        Stackkaroo’s Talent Hiring & Job Placement Services
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: "20px",
          mx: "auto",
          maxWidth: { sm: "none", lg: "1200px" },
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          color: "#36454F",
          textAlign: "center",
        }}
      >
        We are a talent searching platform that redesigns how companies hire
        talents. It is a cost-effective solution for industries. We also provide
        global job opportunities with good salaries, support, and professional
        development.
      </Typography>

      <Box
        sx={{
          mt: "80px",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          columnGap: "50px",
          rowGap: "40px",
        }}
      >
        <HiringAndPlacementServicesCard
          title="Unleashing Top Talent Globally"
          description="We offer 5% top talents and supports companies hiring from various time zones."
          iconSrc={locationIcon}
          iconAlt="global"
        />
        <HiringAndPlacementServicesCard
          title="Securing Success"
          description="The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation."
          iconSrc={promotionIcon}
          iconAlt="promotion"
        />
        <HiringAndPlacementServicesCard
          title="Beyond Borders"
          description="We provide both, flexible full-time and part-time jobs"
          iconSrc={pinIcon}
          iconAlt="beyond borders"
        />
        <HiringAndPlacementServicesCard
          title="End-to-End Excellence"
          description="In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us."
          iconSrc={badgeIcon}
          iconAlt="excellence"
        />
        <HiringAndPlacementServicesCard
          title="Efficiency Redefined"
          description="The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent."
          iconSrc={performanceIcon}
          iconAlt="efficiency"
        />
        <HiringAndPlacementServicesCard
          title="Simplified Contracts Satisfied Partnerships"
          description="The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support."
          iconSrc={commitmentIcon}
          iconAlt="commitment"
        />
      </Box>
    </Box>
  );
}
