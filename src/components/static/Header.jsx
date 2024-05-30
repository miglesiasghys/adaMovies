import { Link } from 'react-router-dom'
import Nav from './Nav';
//MUI
import { Toolbar, Divider, Box, Typography, AppBar } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export default function Header() {

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <AppBar position="absolute" sx={{
        padding: "10px 0px",
        maxWidth: "100%",
        maxHeight: "38vh",
        backgroundColor: "transparent",
        boxShadow: "none"
      }}>
        <Toolbar margin={2} sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center"
        }}>
          <Link to={'/'}>
            <Typography
              variant="h1"
              component="div"
              sx={{ color: "#F5D57B", fontFamily: "Notable", letterSpacing: '0.5px', fontSize: "5vh", padding: "5px", textShadow: "2px 2px 2px black" }}
            >
              ADA<LocalMoviesIcon sx={{ fontSize: "4vh", color: "#E55630", margin: "0px 10px" }} />MOVIES
            </Typography>
          </Link>
          <Nav />
        </Toolbar>
        <Divider variant="middle" sx={{ borderColor: '#F5D57B', borderWidth: '1px' }} />
      </AppBar>
    </Box>
  )
}
