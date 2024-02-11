import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import rupeeIcon from "../../app/assets/icons/rupee.svg";
import appMockup from "../../app/assets/images/App-Mockup.png";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <Box
      sx={{
        mt: "58px",
        mr: "-80px",
        p: "39px 40px",
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        borderRadius: "25px 0px 0px 25px",
      }}
    >
      <Box
        sx={{ mt: "14px", maxWidth: { xs: "none", sm: "675px", md: "900px" } }}
      >
        <Typography
          component="h2"
          sx={{
            maxWidth: "569px",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "50.4px",
            color: "#0A56F1",
          }}
        >
          Our Story
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "20px",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "27.72px",
            letterSpacing: "3%",
            color: "#36454F",
          }}
        >
          Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
          bring their extensive experience to the forefront as industry
          veterans. Our team is fueled by innovation, continually striving to
          exceed customer expectations.
        </Typography>

        <Typography
          component="p"
          sx={{
            mt: "20px",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "27.72px",
            letterSpacing: "3%",
            color: "#36454F",
          }}
        >
          Operating from our registered office in Agartala Sadar, Tripura (W),
          our company is officially registered with the Corporate Identification
          Number (CIN). Our active status and an authorized share capital of Rs
          10.00 lac are a source of pride.
        </Typography>

        <ButtonBase
          sx={{
            mt: "40px",
            p: "10px 18px 10px 10px",
            minWidth: "214px",
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
            bgcolor: "#E68F50",
            gap: "10px",
          }}
        >
          <Image
            src={rupeeIcon}
            alt="rupee"
            style={{
              padding: "5px",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "31.5px",
              letterSpacing: "3%",
              color: "#fff",
            }}
          >
            Get Estimated Project Cost
          </Typography>
        </ButtonBase>
      </Box>

      <Box
        sx={{
          mt: "-83px",
          mr: "-74px",
          mb: "-119px",
        }}
      >
        <Image src={appMockup} alt="App Mockup" />
      </Box>
    </Box>
  );
}
