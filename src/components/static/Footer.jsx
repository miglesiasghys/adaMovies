import {Box, Typography} from '@mui/material'
import Loyalty from '@mui/icons-material/Loyalty'

export default function Footer() {
  return (
    <Box display="flex" sx={{ height: "50px", alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }}>
      <Typography variant="p" sx={{
        color: "#F5D57B", fontFamily: "Montserrat",
        fontWeight: "400"
      }}>
        <Loyalty fontSize="small" sx={{ color: "#E55630" }} /> Hecho por Maca Iglesias Ghys.
      </Typography>
    </Box>
  )
}
