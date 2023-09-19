import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Content = styled("main")(() => ({
  flex: "1 1 auto",
}));

export const StyledContainer = styled(Container)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));