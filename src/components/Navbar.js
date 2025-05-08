import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";

function Navbar() {
  const theme = useTheme(); // 👈 usamos el theme para acceder a la paleta

  const scrollToSection = (id) => {
    console.log("🚀 ~ scrollToSection ~ id:", id);
    const section = document.getElementById(id);
    console.log("🚀 ~ scrollToSection ~ document:", document);
    console.log("🚀 ~ scrollToSection ~ section:", section);
    if (section) {
      console.log("🚀 ~ scrollToSection ~ section:", section);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: theme.palette.background.paper }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: theme.palette.accent.main, // turquesa #00eaba
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          GYM
        </Typography>
        <Button
          onClick={() => scrollToSection("inicio")}
          sx={{
            color: theme.palette.accent.main,
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 0,
              height: "2px",
              backgroundColor: theme.palette.accent.main,
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            transition: "color 0.3s ease-in-out",
          }}
        >
          Inicio
        </Button>
        <Button
          onClick={() => scrollToSection("servicios")}
          sx={{
            color: theme.palette.accent.main,
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 0,
              height: "2px",
              backgroundColor: theme.palette.accent.main,
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            transition: "color 0.3s ease-in-out",
          }}
        >
          Servicios
        </Button>
        <Button
          onClick={() => scrollToSection("planes")}
          sx={{
            color: theme.palette.accent.main,
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 0,
              height: "2px",
              backgroundColor: theme.palette.accent.main,
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            transition: "color 0.3s ease-in-out",
          }}
        >
          Planes
        </Button>
        <Button
          onClick={() => scrollToSection("ubicacion")}
          sx={{
            color: theme.palette.accent.main,
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 0,
              height: "2px",
              backgroundColor: theme.palette.accent.main,
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            transition: "color 0.3s ease-in-out",
          }}
        >
          Ubicación
        </Button>
        <Button
          onClick={() => scrollToSection("contacto")}
          sx={{
            color: theme.palette.accent.main,
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 0,
              height: "2px",
              backgroundColor: theme.palette.accent.main,
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
            transition: "color 0.3s ease-in-out",
          }}
        >
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
