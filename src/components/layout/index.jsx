import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "./style";

function Layout() {
  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      
      <Content>
        <Outlet />
      </Content>

      <Footer />
    </Container>
  );
}

export default Layout;
