import { Box, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Image from "../../assets/map.png";
import { PHONE_NUMBER } from "../../constants";
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
  return (
    <Box component="footer" sx={{ height: 933, p: "0px 64px 36px 30px" }}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h1">Contact</Typography>
            <PhoneNumber>{PHONE_NUMBER}</PhoneNumber>
            <Stack flexDirection="row" gap={8}>
              <SvgIcon sx={svgStyle}>
                <Instagram />
              </SvgIcon>
              <SvgIcon>
                <Watsap />
              </SvgIcon>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h1">Address</Typography>
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
