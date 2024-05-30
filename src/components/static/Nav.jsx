import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
//MUI
import { Menu, MenuItem, IconButton, Box, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Nav() {
  //MENU DESPLEGABLE
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //PARA MOSTRAR EL TOTAL DE FAVORITOS EN EL BADGE
  const { totalFavorites } = useContext(FavoritesContext)

  return (
    <>
      <Box>
        <Link to={'/favorites'}>
          <Badge badgeContent={totalFavorites()} color="error">
            <IconButton
              size="small"
              sx={{ ml: 1 }}
            >
              <FavoriteIcon sx={{ color: "#F5D57B" }} />
            </IconButton>
          </Badge>
        </Link>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MenuIcon sx={{ color: "#F5D57B" }} />
        </IconButton>
      </Box>
      {/* MENU DESPLEGABLE*/}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            backgroundColor: "black",
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'black',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to={"/"} >
          <MenuItem sx={{ color: "#F5D57B" }}>
            Home
          </MenuItem>
        </Link>
        <Link to={"/upcoming"}>
          <MenuItem sx={{ color: "#F5D57B" }}>
            Upcoming movies
          </MenuItem>
        </Link>
        <Link to={"/popular"}>
          <MenuItem sx={{ color: "#F5D57B" }}>
            Popular movies
          </MenuItem>
        </Link>
        <Link to={"/search"}>
          <MenuItem sx={{ color: "#F5D57B" }}>
            Search...
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}