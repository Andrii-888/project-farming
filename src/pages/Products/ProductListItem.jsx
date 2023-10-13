import { Typography, Box, Stack } from "@mui/material";
import { getPercentage } from "../../utils";
import { useTheme } from "@mui/material/styles";

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

const ProductListItem = ({
  title,
  price,
  discont_price,
  description,
  image,
  id,
}) => {
  const { palette, typography } = useTheme();

  return (
    <Stack sx={{ gap: "20px", alignItems: "center", maxWidth: 300 }} key={id}>
      <Box
        component="div"
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${getImgPath(image)})`,
          backgroundRepeat: "no-repeat",
          height: "350px",
          width: "300px",
        }}
      />
      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
          color: "#000",
          alignItems: "baseline",
          justifyContent: "space-between",
          width: "100%",
          p: "0 24px 0",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          ${discont_price ? discont_price : price}
        </Typography>

        {discont_price && (
          <Typography
            sx={{
              fontSize: "20px",
              color: "#8B8B8B",
              textDecoration: "line-through",
            }}
          >
            ${price}
          </Typography>
        )}

        {discont_price && (
          <Typography sx={{ fontSize: "20px", color: "#FF32A1" }}>
            {getPercentage(price, discont_price)}%
          </Typography>
        )}
      </Stack>

      <Typography
        variant="body2"
        sx={{
          fontSize: "16px",
          fontStyle: "normal",
          color: "#3A3A3A",
          alignSelf: "flex-start",
          fontWeight: typography.fontWeightMedium,
          m: "0 24px 0",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default ProductListItem;
