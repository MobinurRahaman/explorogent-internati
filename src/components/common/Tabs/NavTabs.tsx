"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { ButtonBase, ButtonBaseProps } from "@mui/material";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";

const tabData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "about-us",
  },
  {
    name: "Work",
    href: "work",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Clients",
    href: "clients",
  },
  {
    name: "Team",
    href: "team",
  },
  {
    name: "Contact Us",
    href: "contact-us",
  },
];

const NavTab = styled(ButtonBase)<ButtonBaseProps>(({ theme }) => ({
  padding: "15.5px",
  fontFamily: "Outfit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "25.2px",
  letterSpacing: "3%",
  borderRadius: "50px",
}));

export default function NavTabs() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const handleActiveTabChange = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "75px",
        borderRadius: "50px",
        boxShadow: "0 4px 10px 0 rgba(101, 101, 101, 0.25)",
        background:
          "linear-gradient(270deg, rgba(230, 143, 80, 0.1), rgba(10, 86, 241, 0.1))",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <Box
        component="nav"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {tabData.map((tab, tabIndex) => (
          <NextLink key={tabIndex} href={tab.href} passHref>
            <NavTab
              onClick={() => handleActiveTabChange(tabIndex)}
              sx={{
                bgcolor: tabIndex === activeTabIndex ? "#fff" : "none",
                boxShadow:
                  tabIndex === activeTabIndex
                    ? "0 4px 10px 0 rgba(101, 101, 101, 0.35)"
                    : "none",
                color: "#36454F", // Override link styles
                textDecoration: "none",
                "&:hover": {
                  color: "#36454F",
                },
              }}
              key={tabIndex}
            >
              {tab.name}
            </NavTab>
          </NextLink>
        ))}
      </Box>
    </Box>
  );
}
