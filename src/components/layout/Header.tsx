import { Box } from "@mui/material";
import React from "react";
import NavTabs from "../common/Tabs/NavTabs";

const styles = {
  header: {
    px: "80px",
    py: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "16px", sm: "36px", md: "100px", lg: "205px", xl: "280px" },
  },
  logo: {
    flex: "0 0 auto",
    width: "75px",
    height: "75px",
    bgcolor: "#121212",
  },
};

export default function Header() {
  return (
    <Box sx={styles.header}>
      <Box sx={styles.logo}></Box>
      <NavTabs />
    </Box>
  );
}
