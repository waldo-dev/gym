import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

function LocationSection({ id }) {
  const theme = useTheme();

  return (
    <Container id={id} sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
      >
        Dónde estamos
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 4,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 8,
          },
        }}
      >
        <iframe
          title="Ubicación Gimnasio"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.712534523793!2d-70.5679617!3d-33.589812300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d7e2311eb943%3A0x45f4e2204baf2e77!2sFicticia%20Ubicacion%20Street!5e0!3m2!1ses-419!2scl!4v1746642848331!5m2!1ses-419!2scl"
          width="100%"
          height="450"
          style={{
            border: 0,
            minHeight: "300px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Typography
        variant="body2"
        align="center"
        sx={{ color: theme.palette.text.secondary, mt: 2 }}
      >
        Av. Siempre Viva 1234, Santiago, Chile
      </Typography>
    </Container>
  );
}

export default LocationSection;
