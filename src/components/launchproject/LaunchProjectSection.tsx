import { Typography } from "@mui/material";
import React from "react";

export default function LaunchProjectSection() {
  return (
    <>
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
        Stay Ahead!
      </Typography>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: "40px",
          lineHeight: "50.4px",
          color: "#E68F50",
          textAlign: "center",
        }}
      >
        Launch Your Next Project with Stackkaroo
      </Typography>
    </>
  );
}
