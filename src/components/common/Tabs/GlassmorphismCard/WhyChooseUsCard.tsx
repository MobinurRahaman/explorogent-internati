import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface WhyChooseUsCardProps {
  title: string;
  iconSrc: string;
  iconAlt: string;
}

export default function WhyChooseUsCard({
  title,
  iconSrc,
  iconAlt,
}: WhyChooseUsCardProps) {
  return (
    <Box
      sx={{
        p: "20px",
        width: "316px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.08), rgba(10, 86, 241, 0.08))",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#fff",
        borderRadius: "25px",
        boxShadow: "0 4px 10px 0 rgba(10, 86, 241, 0.25)",
      }}
    >
      <Box
        sx={{
          flex: "0 0 80px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          borderRadius: "25px",
        }}
      >
        <Image src={iconSrc} alt={iconAlt} />
      </Box>
      <Typography
        component="h3"
        sx={{
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "31.5px",
          letterSpacing: "3%",
          color: "primary.main",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
