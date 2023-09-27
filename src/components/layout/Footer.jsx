import { Box, Grid, Link, Stack, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Image from "../../assets/map.png";
import { ADDRESS, PHONE_NUMBER } from "../../constants";

import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Watsap } from "../../assets/watsap.svg";
import { responsiveFontSizes } from "../../utils";

const PhoneNumber = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: "91px",
  margin: "25px 0 30px 0",
  ...responsiveFontSizes({ sm: 50, md: 60, lg: 70 }),
}));

const Address = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontWeight: theme.typography.fontWeightMedium,
  textDecorationColor: theme.palette.text.main,
  cursor: "pointer",
  "&:hover": {
    textDecorationColor: "#0069c2",
  },
}));

const svgStyle = {
  width: "50px",
  height: "50px",
};

function Footer() {
  return (
    <Box component="footer" sx={{ p: "48px 32px 47px 32px" }}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h1">Contact</Typography>

            <PhoneNumber>{PHONE_NUMBER}</PhoneNumber>

            <Stack flexDirection="row" gap={8}>
              <Stack gap={1} alignItems="center">
                <SvgIcon sx={svgStyle}>
                  <Instagram />
                </SvgIcon>
                <Typography variant="caption">Instagram</Typography>
              </Stack>

              <Stack gap={1} alignItems="center">
                <SvgIcon sx={svgStyle}>
                  <Watsap />
                </SvgIcon>
                <Typography variant="caption">WhatsApp</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sx={{ paddingLeft: "142px" }}>
            <Typography variant="h1" sx={{ pb: "25px" }}>
              Address
            </Typography>

            <Address
              variant="h1"
              component={Link}
              href="https://www.google.com/search?q=telranDE"
              rel="noopener noreferrer"
              target="_blank"
            >
              {ADDRESS}
            </Address>
            <Typography variant="body2" sx={{ fontWeight: 500, pt: "30px" }}>
              Working Hours:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
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
