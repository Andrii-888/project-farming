import { Box, Grid, Link, Stack, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import Image from "../../assets/map.png";
import { ADDRESS, PHONE_NUMBER } from "../../constants";
import { pxToRem } from "../../App";

import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Watsap } from "../../assets/watsap.svg";

const PhoneNumber = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: pxToRem(70),
  lineHeight: "91px",
}));

const svgStyle = {
  width: "50px",
  height: "50px",
};

function Footer() {
  const { palette, typography } = useTheme();
  return (
    <Box component="footer" sx={{ height: 933, p: "48px 32px 47px 32px" }}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h1">Contact</Typography>
            <PhoneNumber>{PHONE_NUMBER}</PhoneNumber>
            <Stack flexDirection="row" gap={8}>
              <SvgIcon sx={svgStyle}>
                <Instagram />
              </SvgIcon>
              <SvgIcon sx={svgStyle}>
                <Watsap />
              </SvgIcon>
            </Stack>
          </Grid>
          <Grid item xs={6} sx={{ paddingLeft: "142px" }}>
            <Typography variant="h1">Address</Typography>
            <Typography
              variant="h1"
              component={Link}
              sx={{
                color: palette.text.main,
                fontWeight: typography.fontWeightMedium,
                textDecorationColor: palette.text.main,
                cursor: "pointer",
                "&:hover": {
                  textDecorationColor: "#0069c2",
                },
              }}
            >
              {ADDRESS}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Working Hours:
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              24 hours a day
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="div"
            sx={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              height: "525px",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
