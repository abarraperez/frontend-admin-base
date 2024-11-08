import { Outlet } from "react-router-dom";
import ResponsiveAppBar from '../../../components/ResponsiveAppBar';
import Grid from '@mui/material/Grid2';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
        <ResponsiveAppBar />
        <Grid container spacing={1}>
            <Outlet />
        </Grid>
    </div>
  );
};

export default Layout;