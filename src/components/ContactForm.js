import { Container, Typography, TextField, Button, Box, useTheme } from "@mui/material";

function ContactForm({ id }) {
  const theme = useTheme();

  return (
    <Container sx={{ py: 8 }} id={id}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: theme.palette.text.primary, // Rojo para título
          fontWeight: 600,
        }}
      >
        Contáctanos
      </Typography>

      <Box
        component="form"
        sx={{
          maxWidth: 600,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: theme.palette.background.paper, // Fondo oscuro
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 8,
          },
        }}
      >
        <TextField
          label="Nombre"
          fullWidth
          variant="filled"
          InputLabelProps={{
            style: { color: theme.palette.text.primary }, // Rojo en etiqueta
          }}
          InputProps={{
            style: {
              color: theme.palette.text.primary, // Texto blanco
              backgroundColor: theme.palette.background.default, // Fondo input gris oscuro
              borderRadius: 4,
            },
            disableUnderline: true, // Quitar subrayado MUI
          }}
        />
        <TextField
          label="Correo Electrónico"
          fullWidth
          variant="filled"
          InputLabelProps={{
            style: { color: theme.palette.text.primary },
          }}
          InputProps={{
            style: {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              borderRadius: 4,
            },
            disableUnderline: true,
          }}
        />
        <TextField
          label="Mensaje"
          fullWidth
          multiline
          rows={4}
          variant="filled"
          InputLabelProps={{
            style: { color: theme.palette.text.primary },
          }}
          InputProps={{
            style: {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              borderRadius: 4,
            },
            disableUnderline: true,
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            borderRadius: 3,
            fontWeight: 600,
            letterSpacing: 1,
            backgroundColor: theme.palette.secondary.dark,
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
              transform: "scale(1.02)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
}

export default ContactForm;
