import './App.css';
import ResponsiveAppBar from './components/navbar'
import PictureCard from './components/picture';
import AboutmeCard from './components/aboutme';
import ProjectsCard from './components/projects';
import HobbiesCard from './components/hobbies';
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
          <Grid item xs={3}>
          <PictureCard></PictureCard>
          </Grid>
          <Grid item xs={9}>
          <AboutmeCard></AboutmeCard>
          </Grid>
          <Grid item xs={12}>
          <ProjectsCard></ProjectsCard>
          </Grid>
          <Grid item xs={12}>
          <HobbiesCard></HobbiesCard>
          </Grid>
        </Grid>

      </Box>
      </Container>



    </div>
  );
}

export default App;
