// import { Box, Grid, Link, Stack, SvgIcon, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { ADDRESS, PHONE_NUMBER } from "../../constants";

// // import { ReactComponent as Instagram } from "../../assets/instagram.svg";
// // import { ReactComponent as Watsap } from "../../assets/watsap.svg";
// import { responsiveFontSizes } from "../../utils";

// const PhoneNumber = styled(Typography)(({ theme }) => ({
//   fontWeight: theme.typography.fontWeightMedium,
//   lineHeight: "91px",
//   margin: "25px 0 30px 0",
//   ...responsiveFontSizes({ sm: 50, md: 60, lg: 70 }),
// }));

// const Address = styled(Typography)(({ theme }) => ({
//   color: theme.palette.text.main,
//   fontWeight: theme.typography.fontWeightMedium,
//   textDecorationColor: theme.palette.text.main,
//   cursor: "pointer",
//   "&:hover": {
//     textDecorationColor: "#0069c2",
//   },
// }));

// const svgStyle = {
//   width: "50px",
//   height: "50px",
// };

// function Footer() {
//   return (
//     <Box component="footer" sx={{ p: "48px 32px 47px 32px" }}>
//       <Grid container spacing={6}>
//         <Grid container item xs={12}>
//           <Grid item xs={6}>
//             <Typography variant="h1">Contact</Typography>

//             <PhoneNumber>{PHONE_NUMBER}</PhoneNumber>

//             <Stack flexDirection="row" gap={8}>
//               <Stack gap={1} alignItems="center">
//                 <SvgIcon sx={svgStyle}></SvgIcon>
//                 <Typography variant="caption">Instagram</Typography>
//               </Stack>

//               <Stack gap={1} alignItems="center">
//                 <SvgIcon sx={svgStyle}></SvgIcon>
//                 <Typography variant="caption">WhatsApp</Typography>
//               </Stack>
//             </Stack>
//           </Grid>
//           <Grid item xs={6} sx={{ paddingLeft: "142px" }}>
//             <Typography variant="h1" sx={{ pb: "25px" }}>
//               Address
//             </Typography>

//             <Address
//               variant="h1"
//               component={Link}
//               href="https://www.google.com/search?q=telranDE"
//               rel="noopener noreferrer"
//               target="_blank"
//             >
//               {ADDRESS}
//             </Address>
//             <Typography variant="body2" sx={{ fontWeight: 500, pt: "30px" }}>
//               Working Hours:
//             </Typography>
//             <Typography variant="body1" sx={{ fontWeight: 700 }}>
//               24 hours a day
//             </Typography>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Box
//             component="div"
//             sx={{
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//               // backgroundImage: `url(${Image})`,
//               backgroundRepeat: "no-repeat",
//               height: "525px",
//               width: "100%",
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Footer;

import { Box, Grid, Icon, Paper, Typography } from "@mui/material";
import React from "react";
import Instagram from "../../assets/instagram.png";
import Whatsap from "../../assets/whatsapp.png";

function Footer() {
  return (
    <Box component="footer" sx={{ p: "80px 40px 47px 40px" }}>
      <Typography
        variant="h1"
        sx={{
          color: "#282828",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "110%",
        }}
      >
        Contact
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ m: "40px 0 0 40px" }}
      >
        <Grid item xs={7}>
          <Paper
            elevation={24}
            sx={{
              width: "780px",
              height: "150px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                p: "32px 0 0 32px",
                color: "#8B8B8B",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "26px",
              }}
            >
              Phone
            </Typography>
            <Typography
              sx={{
                m: "16px 0 0 32px",
                color: "#282828",
                fontSize: "40px",
                fontWeight: 600,
                alignSelf: "stretch",
                fontFamily: "Montserrat",
              }}
            >
              +49 999 999 99 99
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper
            elevation={24}
            sx={{
              width: "548px",
              height: "150px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                color: "#8B8B8B",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "130%",
                p: "32px 0 0 32px",
              }}
            >
              Socials
            </Typography>
            <Icon
              sx={{
                color: "#282828",
                width: "43px",
                height: "44px",
                m: "16px 0 0 32px",
              }}
            >
              <img src={Instagram} alt="instagram" />
            </Icon>
            <Icon
              sx={{
                color: "#282828",
                width: "43px",
                height: "44px",
                m: "16px 0 0 16px",
              }}
            >
              <img src={Whatsap} alt="whatsap" />
            </Icon>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper
            elevation={24}
            sx={{
              gap: "16px",
              width: "780px",
              height: "194px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                p: "32px 0 0 32px",
                color: "#8B8B8B",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                p: "0 0 32px 32px",
                color: "#282828",
                fontSize: "35px",
                fontWeight: "400",
                fontStyle: "normal",
                fontFamily: "Montserrat",
              }}
            >
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper
            elevation={24}
            sx={{
              width: "548px",
              height: "194px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                color: "#8B8B8B",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "130%",
                p: "32px 0 0 32px",
                gap: "32px",
              }}
            >
              Working Hours
            </Typography>
            <Typography
              sx={{
                color: "#282828",
                fontSize: "40px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "110%",
                p: "0 0 32px 32px",
              }}
            >
              24 hours a day
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <div style={{ width: "100%", padding: "32px 0 0 0" }}>
        <div>
          <iframe
            width="100%"
            height="350px"
            src="https://maps.google.com/maps?width=100%25&amp;height=350px&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010%E2%80%AF785,%20Berlin,%20Deutschland+(Tel-Ran)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </Box>
  );
}

export default Footer;
