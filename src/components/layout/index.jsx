import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <Container disableGutters>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
