import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function ButtonLink({ to, title }) {
  const { palette } = useTheme();
  return (
    <Button
      sx={{
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20.8px",
        color: palette.text.main,
      }}
      disableRipple
      component={RouterLink}
      to={to}
    >
      {title}
    </Button>
  );
}

export default ButtonLink;
