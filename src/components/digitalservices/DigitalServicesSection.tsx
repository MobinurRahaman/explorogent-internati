import { Box, Typography } from "@mui/material";
import React from "react";
import DigitalServicesCard from "../common/Card/DigitalServicesCard";
import webDevIcon from "@/app/assets/icons/software.png";
import appDevIcon from "@/app/assets/icons/code.png";
import softDevIcon from "@/app/assets/icons/cloud-computing.png";
import marketingIcon from "@/app/assets/icons/marketing.png";
import seoIcon from "@/app/assets/icons/seo.png";

export default function DigitalServicesSection() {
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
        Stackkaroo’s Digital Services
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: "20px",
          mx: "auto",
          maxWidth: { sm: "none", lg: "900px" },
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          color: "#36454F",
          textAlign: "center",
        }}
      >
        We excel with reliability, innovation and customer-centric approach for
        our quality products. Our dedicated team ensures that the solutions
        provided are dependable and long-term
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
        <DigitalServicesCard
          title="Website Development"
          description="We specialize in responsive website development, ensuring optimal performance across various devices."
          iconSrc={webDevIcon}
          iconAlt="Website Development"
        />
        <DigitalServicesCard
          title="App Development"
          description="We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation."
          iconSrc={appDevIcon}
          iconAlt="App Development"
        />
        <DigitalServicesCard
          title="Software Development"
          description=" We specialize in tailored solutions ensuring business growth and efficiency by providing superior software."
          iconSrc={softDevIcon}
          iconAlt="Software Development"
        />
        <DigitalServicesCard
          title="UI/UX Design"
          description=" We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces."
          iconSrc={marketingIcon}
          iconAlt="UI/UX Design"
        />
        <DigitalServicesCard
          title="Digital Marketing"
          description="We specialize in tailored digital marketing solutions and ensure effective online marketing strategies."
          iconSrc={marketingIcon}
          iconAlt="Digital Marketing"
        />
        <DigitalServicesCard
          title="SEO Optimization"
          description="We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience."
          iconSrc={seoIcon}
          iconAlt="SEO Optimization"
        />
      </Box>
    </Box>
  );
}
