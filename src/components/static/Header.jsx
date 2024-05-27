import { Link } from 'react-router-dom'
//MUI
import { Toolbar, Divider, Box, Typography, AppBar } from '@mui/material';

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
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}>
                    <Box margin={2}>
                        <Link to={'/'}>
                            <Typography
                                variant="h1"
                                component="div"
                                sx={{ color: "#F5D57B", fontFamily: "Notable", letterSpacing: '0.5px', fontSize: "4vh", padding: "5px", textShadow: "2px 2px 2px black" }}
                            >
                                ADA•MOVIES
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
                <Divider variant="middle" sx={{ borderColor: '#F5D57B', borderWidth: '1px' }} />
            </AppBar>
        </Box>
    )
}
