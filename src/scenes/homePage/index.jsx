import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidjet";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
// import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "../widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      {/* Sticky Navbar */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar />
      </Box>

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* Sticky UserWidget only for large screens */}
        <Box
          flexBasis={isNonMobileScreens ? "26%" : undefined}
          sx={{
            position: isNonMobileScreens ? "sticky" : "static",
            top: isNonMobileScreens ? "6rem" : undefined,
            height: "fit-content",
          }}
        >
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>

        {/* PostsWidget: Scroll on non-mobile screens, normal behavior on mobile */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          sx={{
            overflowY: isNonMobileScreens ? "auto" : "visible", // Allow scrolling only on large screens
            maxHeight: isNonMobileScreens ? "80vh" : "none", // Limit height only for non-mobile screens
          }}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} /> {/* Scrolls on large screens */}
        </Box>

        {/* Sticky FriendListWidget only for large screens */}
        {isNonMobileScreens && (
          <Box
            flexBasis="26%"
            sx={{
              position: "sticky",
              top: "6rem",
              height: "fit-content",
            }}
          >
            {/* <AdvertWidget /> */}
            {/* <Box m="2rem 0" /> */}
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
