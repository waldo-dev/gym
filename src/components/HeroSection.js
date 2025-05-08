import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function HeroSection({ id }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si es pantalla pequeña

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${
          isMobile ? "/banners/banner1-celular.png" : "/banners/banner1.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: theme.palette.text.primary,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
        },
      }}
      id={id}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight="bold"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          Transforma tu vida
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: theme.palette.text.primary, // Gris claro para el subtítulo
          }}
        >
          Únete a nuestro gimnasio y logra tus metas
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            backgroundColor: theme.palette.accent.main,
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.accent.main}`,
            fontWeight: "bold",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)", // transición más fluida
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.accent.main,
              transform: "scale(1.05)",
              boxShadow: `0 0 20px ${theme.palette.accent.main}`,
              border: `1px solid ${theme.palette.accent.main}`,
            },
          }}
        >
          Inscríbete Ahora
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
