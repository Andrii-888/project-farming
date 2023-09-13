import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Logo from "../../assets/logo.svg";
import { styled } from "@mui/material/styles";

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  background: "green",
  height: "72px",
  boxShadow: "none",
}));

export default function Header() {
  return (
    <HeaderStyled position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={Logo} alt="React Logo" />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </Toolbar>
    </HeaderStyled>
  );
}
