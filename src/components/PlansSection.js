import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Box,
} from "@mui/material";

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

  return (
    <Container sx={{ py: 8 }} id={id}>
      {/* <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: theme.palette.accent.main,
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Nuestros Planes
      </Typography> */}
      <Grid container spacing={4} justifyContent="center">
        {planes.map((plan, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
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
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
                backgroundColor: theme.palette.background.paper,
              }}
            >
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
                {/* Overlay sutil */}
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
                  sx={{ color: theme.palette.text.secondary, mb: 2 }}
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PlansSection;
