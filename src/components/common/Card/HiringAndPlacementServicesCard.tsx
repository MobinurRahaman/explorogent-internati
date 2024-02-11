import { Box, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface HiringAndPlacementServicesCardProps {
  title: string;
  description: string;
  iconSrc: StaticImport;
  iconAlt: string;
}

export default function HiringAndPlacementServicesCard({
  title,
  description,
  iconSrc,
  iconAlt,
}: HiringAndPlacementServicesCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        p: "20px",
        width: "400px",
        height: "330px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
        gap: "20px",
        borderRadius: "25px",
        boxShadow: "0 8px 10px 0 #65656540",
      }}
    >
      <Box
        sx={{
          flex: "0 0 75px",
          height: "75px",
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
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          color: "primary.main",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Typography
        component="p"
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "25.2px",
          letterSpacing: "3%",
          color: "#36454F",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
