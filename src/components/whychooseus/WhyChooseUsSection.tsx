import { Box, Typography } from "@mui/material";
import React from "react";
import WhyChooseUsCard from "../common/Tabs/GlassmorphismCard/WhyChooseUsCard";
import userIcon from "@/app/assets/icons/user.svg";
import peopleIcon from "@/app/assets/icons/people.svg";
import editUserIcon from "@/app/assets/icons/edit-user.svg";
import diamondIcon from "@/app/assets/icons/diamond.svg";
import onTimeIcon from "@/app/assets/icons/on-time.svg";

export default function WhyChooseUsSection() {
  return (
    <Box sx={{ mt: "64px" }}>
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
        Why Choose Us?
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
        <WhyChooseUsCard
          title="User-Centric Approach"
          iconSrc={userIcon}
          iconAlt="user"
        />
        <WhyChooseUsCard
          title="Customer Satisfaction"
          iconSrc={peopleIcon}
          iconAlt="people"
        />
        <WhyChooseUsCard
          title="Integrating Feedback"
          iconSrc={editUserIcon}
          iconAlt="edit user"
        />
        <WhyChooseUsCard
          title="High Quality Products"
          iconSrc={diamondIcon}
          iconAlt="diamond"
        />
        <WhyChooseUsCard
          title="On-Time Product Delivery"
          iconSrc={onTimeIcon}
          iconAlt="on-time"
        />
      </Box>
    </Box>
  );
}
