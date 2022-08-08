import './App.css';
import ResponsiveAppBar from './components/navbar'
import PictureCard from './components/picture';
import AboutmeCard from './components/aboutme';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="xl">
      <Box sx={{ p: 2 }}>

        <Grid container spacing={2}>
          <Grid item xs={4}>
          <PictureCard></PictureCard>
          </Grid>
          <Grid item xs={8}>
          <AboutmeCard></AboutmeCard>
          </Grid>
        </Grid>

      </Box>
      </Container>



    </div>
  );
}

export default App;
