import { AppBar, Badge, Button, Icon, Stack, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";
import ButtonLink from "../ButtonLink";
import { APP_ROUTES } from "../../constants";
import { useSelector } from "react-redux";
import { selectCartProductsLength } from "../../store/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  background: "transparent",
  height: "72px",
  width: "auto",
  boxShadow: "none",
  margin: "20px 30px",

  "& .MuiToolbar-root": {
    padding: 0,
    justifyContent: "space-between",
  },
}));

const Links = styled(Stack)(() => ({
  flexDirection: "row",
  gap: "30px",
}));

const NavContainer = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  padding: "0 170px 0 60px",
  justifyContent: "space-between",
}));

export default function Header() {
  const cartProductsCount = useSelector(selectCartProductsLength);

  const navigate = useNavigate();

  const handleNavToCartPage = () => {
    navigate(APP_ROUTES.CART);
  };

  const handleNavToCatalogPage = () => {
    navigate(APP_ROUTES.CATEGORIES);
  };

  return (
    <HeaderStyled position="static">
      <Toolbar variant="dense">
        <Icon sx={{ height: "72px", width: "72px" }}>
          <img src={Logo} alt="logo" />
        </Icon>

        <NavContainer>
          <Button variant="contained" color="primary" onClick={handleNavToCatalogPage}>
            Catalog
          </Button>
          <Links>
            <ButtonLink to={APP_ROUTES.MAIN} title="Main Page" />
            <ButtonLink to={APP_ROUTES.PRODUCTS} title="All products" />
            <ButtonLink to={APP_ROUTES.PRODUCTS} state={{ sale: true }} title="All sales" />
          </Links>
        </NavContainer>

        <Badge badgeContent={cartProductsCount} color="success" invisible={false} size="large">
          <Icon sx={{ height: "30px", width: "30px", cursor: "pointer" }} onClick={handleNavToCartPage}>
            <img src={Cart} alt="cart" />
          </Icon>
        </Badge>
      </Toolbar>
    </HeaderStyled>
  );
}
