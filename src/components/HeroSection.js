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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id={id}
      sx={{
        height: "100vh",
        backgroundImage: `url(${
          isMobile
            ? "/banners/banner1-celular.png"
            : "/banners/banner1.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.primary,
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(2px)",
          zIndex: 0,
        },
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            color: "#fff",
            textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
            mb: { xs: 2, md: 3 },
            fontFamily: "Anton, sans-serif",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
            },
          }}
        >
          Transforma tu vida
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            mb: { xs: 3, md: 4 },
            textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
            fontWeight: 300,
            fontSize: {
              xs: "1rem",
              sm: "1.125rem",
              md: "1.25rem",
            },
          }}
        >
          Únete a nuestro gimnasio y logra tus metas
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: theme.palette.accent.main,
            color: "#fff",
            fontWeight: "bold",
            px: { xs: 3, sm: 4 },
            py: { xs: 1.2, sm: 1.5 },
            borderRadius: "8px",
            fontSize: {
              xs: "0.875rem",
              sm: "1rem",
              md: "1.125rem",
            },
            textTransform: "uppercase",
            boxShadow: `0 4px 20px ${theme.palette.accent.main}`,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#fff",
              color: theme.palette.accent.main,
              transform: "scale(1.05)",
              boxShadow: `0 0 30px ${theme.palette.accent.main}`,
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
