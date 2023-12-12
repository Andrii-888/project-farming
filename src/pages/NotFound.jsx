import { Box } from "@mui/material";
import React from "react";
// import Image from "../assets";

function NotFound() {
  return (
    <Box
      component="div"
      sx={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        height: 625,
        width: "100%",
      }}
    />
  );
}

export default NotFound;
