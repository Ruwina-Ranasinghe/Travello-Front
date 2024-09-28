import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./form";
import { useState } from "react";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [pageType, setPageType] = useState("login"); // Add pageType state here

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url('https://travello-backend.vercel.app/assets/Back.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="37px"
          fontFamily="'Oleo Script', cursive"
          color="#32CD32"
        >
          Travello
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        sx={{
          backdropFilter: "blur(10px)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          minHeight: "calc(100vh - 6rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Conditionally render LOGIN or REGISTER */}
        <Typography fontWeight="500" variant="h4" sx={{ mb: "1.5rem" }}>
          {pageType === "login" ? "LOGIN" : "REGISTER"}
        </Typography>

        {/* Pass setPageType as a prop to Form */}
        <Form setPageType={setPageType} pageType={pageType} />
      </Box>
    </Box>
  );
};

export default LoginPage;
