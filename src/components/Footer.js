import { Box, Typography, IconButton, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        textAlign: "center",
        py: 4,
        px: 2,
      }}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} GYM. Todos los derechos reservados.
      </Typography>
      <Box>
        <IconButton
          sx={{
            color: theme.palette.secondary.main,
            mx: 1,
            transition: "transform 0.3s ease, color 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              color: theme.palette.accent.main,
            },
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.secondary.main,
            mx: 1,
            transition: "transform 0.3s ease, color 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              color: theme.palette.accent.main,
            },
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
