import ResponsiveAppBar from './components/navbar'
import PictureCard from './components/picture';
import AboutmeCard from './components/aboutme';
import ProjectsCard from './components/projects';
import HobbiesCard from './components/hobbies';
import ResumeCard from './components/resume';
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
          <Grid item xs={12} md={3}>
            <br></br>
          <PictureCard></PictureCard>
          </Grid>
          <Grid item xs={12} md={9}>
          <AboutmeCard></AboutmeCard>
          </Grid>
          <Grid item xs={12}>
          <ProjectsCard></ProjectsCard>
          </Grid>
          <Grid item xs={12}>
          <HobbiesCard></HobbiesCard>
          </Grid>
          <Grid item xs={12}>
          <ResumeCard></ResumeCard>
          </Grid>
        </Grid>

      </Box>
      </Container>



    </div>
  );
}

export default App;
