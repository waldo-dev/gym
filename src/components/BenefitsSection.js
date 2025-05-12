import {
  Container,
  Grid,
  Card,
  Typography,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import SpaIcon from "@mui/icons-material/Spa";

const beneficios = [
  {
    icon: <SportsMartialArtsIcon fontSize="large" />,
    title: "Profesionales a tu disposición",
    desc: "PF, Personal Trainers.",
    video: "/videos/profesionales.mp4",
  },
  {
    icon: <FitnessCenterIcon fontSize="large" />,
    title: "De los mejores Equipamientos",
    desc: "Equipamiento de la mejor calidad.",
    video: "/videos/implementos.mp4",
  },
  {
    icon: <SpaIcon fontSize="large" />,
    title: "Soporte 24/7",
    desc: "Contamos con soporte todos los días.",
    video: "/videos/soporte.mp4",
  },
];

function BenefitsSection({ id }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id={id} sx={{ py: { xs: 6, sm: 8 } }}>
      {/* Títulos */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, sm: 8 } }}>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.accent.main,
            letterSpacing: 1,
            fontWeight: 700,
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontFamily: "Anton, sans-serif",
          }}
        >
          ¿Por qué entrenar con
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3rem" },
            fontFamily: "Anton, sans-serif",
            letterSpacing: 2,
          }}
        >
          nosotros?
        </Typography>
      </Box>

      {/* Cards */}
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {beneficios.map((b, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "24px",
                  height: { xs: "360px", sm: "400px", md: "420px" },
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                  },
                }}
              >
                {/* Video de fondo */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    "& video": {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.4)",
                      transition: "transform 0.6s ease",
                    },
                    "&:hover video": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <video autoPlay loop muted>
                    <source src={b.video} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </Box>

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.8) 100%)",
                    zIndex: 2,
                  }}
                />

                {/* Contenido */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.accent.main,
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <Box sx={{ mb: 2 }}>{b.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.accent.main,
                      mb: 1,
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {b.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BenefitsSection;
