import { Alert, Grid, Snackbar, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Page from "../../components/Page";
import { APP_ROUTES } from "../../constants";
import { styled } from "@mui/material/styles";
import { pxToRem } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCartStatus,
  selectCartError,
  selectCartProducts,
  selectCartStatus,
  selectCartTotal,
  submitOrder,
} from "../../store/features/cart/cartSlice";
import OrderForm from "../../components/forms/OrderForm";
import { useCallback, useState } from "react";
import CartProductItem from "./CartProductItem";

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  fontSize: pxToRem(20),
}));

const Cart = () => {
  const [message, setMessage] = useState("");

  const { palette, typography } = useTheme();
  const dispatch = useDispatch();

  const cartProducts = useSelector(selectCartProducts);
  const total = useSelector(selectCartTotal);
  const status = useSelector(selectCartStatus);
  const error = useSelector(selectCartError);

  const handleSubmitOrder = useCallback(
    (fields) => {
      dispatch(
        submitOrder({
          ...fields,
          total,
        })
      );
    },
    [dispatch, total]
  );

  const handleHideMessage = () => {
    setMessage("");
  };

  if (status === "success" && !message) {
    setMessage("The order was sent successfully.");
    dispatch(resetCartStatus());
  }

  if (status === "error" && !message) {
    setMessage(error);
    dispatch(resetCartStatus());
  }

  return (
    <Page title="Shopping cart">
      <Snackbar
        open={!!message}
        autoHideDuration={2000}
        onClose={handleHideMessage}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleHideMessage}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>

      <Stack alignItems="center">
        <Link to={APP_ROUTES.PRODUCTS}>Back to the store</Link>

        <Grid container sx={{ mt: 0 }} spacing={8}>
          <Grid item xs={12} lg={7}>
            {cartProducts.map(({ item, amount }) => (
              <CartProductItem key={item.id} product={item} amount={amount} />
            ))}
          </Grid>

          <Grid item xs={12} lg={5}>
            <Stack
              sx={{
                p: 3,
                gap: 6,
                width: "496px",
                height: "393px",
                borderRadius: "21px",
                flexShrink: 0,
                border: `"2px solid" ${palette.common.black}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: pxToRem(28),
                  fontWeight: typography.fontWeightMedium,
                }}
              >
                Order details
              </Typography>

              <Stack
                flexDirection="row"
                alignItems="baseline"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontSize: pxToRem(24),
                    fontWeight: typography.fontWeightRegular,
                  }}
                >
                  Total
                </Typography>
                <Typography
                  sx={{
                    fontSize: pxToRem(32),
                    fontWeight: typography.fontWeightMedium,
                  }}
                >
                  {total.toFixed(2)}
                  <span
                    style={{
                      fontSize: pxToRem(10),
                      verticalAlign: "baseline",
                    }}
                  >
                    $
                  </span>
                </Typography>
              </Stack>

              <OrderForm
                onSubmit={handleSubmitOrder}
                loading={status === "pending"}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Page>
  );
};

export default Cart;
