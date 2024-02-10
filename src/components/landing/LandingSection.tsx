import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import callIcon from "../../app/assets/icons/call.svg";
import mobileAppMockup from "../../app/assets/images/Mobile-Phone-App-Mockup.png";
import Image from "next/image";

export default function LandingSection() {
  return (
    <Box
      sx={{
        p: "39px 40px",
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        borderRadius: "25px 25px 0px 0px",
      }}
    >
      <Box sx={{ mt: "14px", maxWidth: "675px" }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            maxWidth: "569px",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "50.4px",
            color: "#0A56F1",
          }}
        >
          Diversifying the Designs of Digital World
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
          Explorogent International Services Private Limited (EISPL) is one of
          the most famous companies in the sector of Web and Mobile Development.
          In the market, EISPL has a strong presence in providing quality
          services to its clients.
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
          EISPL is convinced that one should diversify the offering, given the
          changing needs of the clients. That is why we engage in multiple
          projects and activities. We also possess knowledge in web development,
          app development, UI/UX design, as well as digital marketing.
        </Typography>

        <ButtonBase
          sx={{
            mt: "40px",
            p: "12px",
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
            src={callIcon}
            alt="call"
            style={{
              padding: "5px",
              backgroundColor: "#fff",
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
            Book a Call
          </Typography>
        </ButtonBase>
      </Box>

      <Box sx={{ mr: "-120px" }}>
        <Image src={mobileAppMockup} alt="Mobile Phone App Mockup" />
      </Box>
    </Box>
  );
}
