import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { HeaderStyled, StyledRouterLink } from "./style";
import { Icon } from "@mui/material";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";

import { APP_ROUTES } from "../../constants";

const drawerWidth = 240;

const navItems = [
  { title: "Main Page", to: APP_ROUTES.MAIN },
  { title: "Categories", to: APP_ROUTES.CATEGORIES },
  { title: "All products", to: APP_ROUTES.PRODUCTS },
  { title: "All sales", to: APP_ROUTES.SALES },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Icon
        sx={{
          height: "70px",
          width: "70px",
        }}
      >
        <img src={Logo} alt="logo" />
      </Icon>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderStyled component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>

          <Icon
            sx={{
              height: "70px",
              width: "70px",
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
          >
            <img src={Logo} alt="logo" />
          </Icon>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <StyledRouterLink  key={item.title} to={item.to}>
                {item.title}
              </StyledRouterLink >
            ))}
          </Box>
          <Icon sx={{ height: "48px", width: "48px", cursor: "pointer" }}>
            <img src={Cart} alt="cart" />
          </Icon>
        </Toolbar>
      </HeaderStyled>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
