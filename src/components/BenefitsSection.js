import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Box,
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

  return (
    <Container sx={{ py: 8 }} id={id}>
      <Grid container spacing={4} justifyContent="center">
        {beneficios.map((b, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px", // esquinas redondeadas modernas
                height: "420px",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                },
              }}
            >
              {/* Fondo de video */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  "& video": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.4)", // oscurecemos para texto legible
                    transition: "transform 0.6s ease",
                  },
                  "&:hover video": {
                    transform: "scale(1.1)", // zoom suave al hover
                  },
                }}
              >
                <video autoPlay loop muted>
                  <source src={b.video} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              </Box>

              {/* Overlay gradiente */}
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
                  color: theme.palette.accent.main, // Turquesa del theme
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Box sx={{ mb: 2 }}>{b.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.accent.main, // rojo del theme
                    mb: 1,
                  }}
                >
                  {b.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
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
  );
}

export default BenefitsSection;
