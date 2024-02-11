import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import checkboxCheckedIcon from "../../app/assets/icons/checkbox-checked.svg";
import Image from "next/image";

const SEOServiceItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Box sx={{ display: "flex", gap: "20px" }}>
    <Image src={checkboxCheckedIcon} alt="checkbox checked" />
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography
        sx={{
          mr: "15px",
          fontWeight: 600,
          fontSize: "28px",
          lineHeight: "35.28px",
          color: "primary.main",
        }}
      >
        {title}
      </Typography>

      <Typography
        component="p"
        sx={{
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          color: "#36454F",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

export default function SEOServicesSection() {
  return (
    <Box
      sx={{
        mt: "80px",
        p: "39px 40px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        borderRadius: "25px 25px 0px 0px",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: "40px",
          lineHeight: "50.4px",
          color: "#E68F50",
          textAlign: "center",
        }}
      >
        SEO Services
      </Typography>

      <Box
        sx={{
          mt: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "44px",
            }}
          >
            <SEOServiceItem
              title="Customized SEO Services"
              description="We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business."
            />
            <SEOServiceItem
              title="On-Page SEO Services"
              description="We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes."
            />
            <SEOServiceItem
              title="Off-Page SEO Services"
              description="We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel."
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "44px",
            }}
          >
            <SEOServiceItem
              title="Mobile SEO Services"
              description="We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices."
            />
            <SEOServiceItem
              title="Free Website Audit and Strategies"
              description="We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services."
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
