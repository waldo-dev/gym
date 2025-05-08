import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import OfertBannerSection from "./components/OfertBannerSection";
import PlansSection from "./components/PlansSection";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab } from "@mui/material";
import LocationSection from "./components/LocationSection";

const theme = createTheme({
   palette: {
    mode: "dark",
    primary: { main: "#000000" }, // negro
    secondary: { main: "#e63946" }, // rojo oscuro tipo sangre
    // accent: { main: "#9e9e9e" }, // GRIS GYM CUICO
    accent: { main: "#ff6f00" }, // turquesa moderno
    background: { default: "#000000", paper: "#1a1a1a", divider: "#003a3a", benefits: "#8b0000" }, // fondo negro y gris oscuro
    text: { primary: "#ffffff", secondary: "#e0e0e0" }, // blanco y gris claro
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700, letterSpacing: 1 },
    h2: { fontSize: "2.5rem", fontWeight: 600, letterSpacing: 1 },
    h3: { fontSize: "2rem", fontWeight: 600, letterSpacing: 1 },
    h4: { fontSize: "1.75rem", fontWeight: 500, letterSpacing: 1 },
    h5: { fontSize: "1.5rem", fontWeight: 500, letterSpacing: 1 },
    h6: { fontSize: "1.25rem", fontWeight: 500, letterSpacing: 1 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    body2: { fontSize: "0.875rem", fontWeight: 400 },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box>
        <HeroSection id="inicio"/>
        <Box
          sx={{
            textAlign: "center",
            py: 4,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.secondary, // texto en turquesa (#00eaba)
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            ¿Por qué entrenar con
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.secondary, // texto en turquesa (#00eaba)
              letterSpacing: 2,
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            nosotros?
          </Typography>
        </Box>

        <BenefitsSection id="servicios"/>
        <OfertBannerSection />
        <Box
          sx={{
            textAlign: "center",
            py: 4,
            backgroundColor: theme.palette.background.default ,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.primary, // texto en turquesa (#00eaba)
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            Unete al mejor gimnasio
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.secondary.main, // texto en turquesa (#00eaba)
              letterSpacing: 2,
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            de la zona
          </Typography>
        </Box>
        <PlansSection id="planes"/>
        <ContactForm id="contacto" />
        <LocationSection id="ubicacion"/>
        <Footer />
      </Box>
      <Fab
        color="secondary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "#25D366", // color oficial WhatsApp
          "&:hover": { backgroundColor: "#1DA851" },
        }}
        href="https://wa.me/56912345678?text=Hola!%20Quiero%20más%20información%20sobre%20el%20gimnasio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon sx={{ color: "#fff" }} />
      </Fab>
    </ThemeProvider>
  );
}

export default App;
