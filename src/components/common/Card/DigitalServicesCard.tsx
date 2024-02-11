import { Box, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import arrowRightIcon from "@/app/assets/icons/iconamoon_arrow-right-6-circle-fill.svg";

interface DigitalServicesCardProps {
  title: string;
  description: string;
  iconSrc: StaticImport;
  iconAlt: string;
}

export default function DigitalServicesCard({
  title,
  description,
  iconSrc,
  iconAlt,
}: DigitalServicesCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        p: "40px",
        width: "400px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        borderRadius: "25px",
        border: "double 1px transparent",
        backgroundImage:
          "linear-gradient(45deg, rgba(255, 255, 255, .95), rgba(255, 255, 255, .95)), linear-gradient(-45deg, rgba(10, 86, 241, 1), rgba(230, 143, 80, 1))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <Box
        sx={{
          height: "75px",
          display: "flex",
          gap: "34px",
          justifyContent: "center",
          alignItems: "center",
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
          sx={{
            mr: "15px",
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

      <Typography
        component="p"
        sx={{
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          color: "#36454F",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>

      <Image
        src={arrowRightIcon}
        alt="arrow right"
        style={{ position: "absolute", left: "25px", bottom: "25px" }}
      />
    </Box>
  );
}
