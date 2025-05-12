import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const planes = [
  {
    image: "/banners/plan1.jpg",
    title: "Plan Básico",
    desc: "Acceso completo al gimnasio de lunes a viernes.",
    precioAntes: "$40.000",
    precioOferta: "$29.990",
  },
  {
    image: "/banners/plan1.jpg",
    title: "Plan Premium",
    desc: "Acceso 24/7 + clases grupales ilimitadas.",
    precioAntes: "$60.000",
    precioOferta: "$44.990",
  },
  {
    image: "/banners/plan1.jpg",
    title: "Plan VIP",
    desc: "Incluye asesoría personalizada y nutrición.",
    precioAntes: "$80.000",
    precioOferta: "$59.990",
  },
];

function PlansSection({ id }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ py: { xs: 6, sm: 8 } }} id={id}>
      {/* Encabezado */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, sm: 8 } }}>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.primary,
            letterSpacing: 1,
            fontWeight: 700,
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontFamily: "Anton, sans-serif",
          }}
        >
          Únete al mejor gimnasio
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.75rem", md: "3rem" },
            fontFamily: "Anton, sans-serif",
            letterSpacing: 2,
          }}
        >
          de la zona
        </Typography>
      </Box>

      {/* Cards de planes */}
      <Grid container spacing={4} justifyContent="center">
        {planes.map((plan, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: 6,
                  },
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                {/* Imagen de fondo con overlay */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                  }}
                >
                  <Box
                    component="img"
                    src={plan.image}
                    alt={plan.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                    }}
                  />
                </Box>

                {/* Contenido del plan */}
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.accent.main,
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {plan.desc}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: theme.palette.grey[500],
                      }}
                    >
                      {plan.precioAntes}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                      }}
                    >
                      {plan.precioOferta}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PlansSection;
