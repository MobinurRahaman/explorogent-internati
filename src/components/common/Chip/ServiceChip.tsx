import { Box, Typography } from "@mui/material";
import React from "react";

export default function ServiceChip({ label }: { label: string }) {
  return (
    <Box
      sx={{
        p: "8.5px 25px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "primary.main",
        borderRadius: "25px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: "27.72px",
          letterSpacing: "3%",
          color: "primary.main",
          textWrap: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
