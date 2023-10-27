import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useNavigate } from 'react-router-dom';

export const MainListItems = () => {

  const navigate = useNavigate();

  const handleRegistrar = () => {
    navigate("/registrar")
  }

  const handleListado = () => {
    navigate("/listado")
  }

  const handleVer = () => {
    navigate("/ver")
  }

  const handleReportes = () => {
    navigate("/reportes")
  }
  
  return (
    <React.Fragment>
      <ListItemButton onClick={handleRegistrar}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Registrar" />
      </ListItemButton>
      <ListItemButton onClick={handleListado}>
        <ListItemIcon>
        <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Listado" />
      </ListItemButton>
      <ListItemButton onClick={handleVer} >
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="Ver" />
      </ListItemButton>
      <ListItemButton onClick={handleReportes}>
        <ListItemIcon>
          <SummarizeIcon />
        </ListItemIcon>
        <ListItemText primary="Reporte" />
      </ListItemButton>
    </React.Fragment>
  )
};
