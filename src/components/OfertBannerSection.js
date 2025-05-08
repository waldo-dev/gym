import { Box, Typography, Button, Container, useTheme } from "@mui/material";

function OfertBannerSection() {
  const theme = useTheme(); // Accedemos al theme

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(/banners/banner-oferta.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: theme.palette.text.primary, // Texto blanco o gris claro dependiendo del tema
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // bgcolor: "rgba(0,0,0,0.4)", // capa oscura
        },
      }}
    >
    </Box>
  );
}

export default OfertBannerSection;
