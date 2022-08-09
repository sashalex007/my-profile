import ResponsiveAppBar from './components/navbar'
import PictureCard from './components/picture';
import AboutmeCard from './components/aboutme';
import ProjectsCard from './components/projects';
import HobbiesCard from './components/hobbies';
import ResumeCard from './components/resume';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useRef } from 'react';

function App() {

  const aboutme = useRef()
  const projects = useRef()
  const hobbies = useRef()
  const resume = useRef()

  const navItems = [
    {
      name: 'About me',
      ref: aboutme
    },
    {
      name: 'Projects',
      ref: projects
    },
    {
      name: 'Hobbies',
      ref: hobbies
    },
    {
      name: 'Resume',
      ref: resume
    }
  ]

  function scrollTo(ref) {
    if (ref && ref.current) {
      setTimeout(function () {
        let targetEle = ref.current
        let pos = targetEle.style.position;
        let top = targetEle.style.top;
        targetEle.style.position = 'relative';
        targetEle.style.top = '-64px';
        targetEle.scrollIntoView({ behavior: 'smooth', block: 'start' })
        targetEle.style.top = top;
        targetEle.style.position = pos;
      }, 1)
    }
  }

  return (
    <div className="App">
      <ResponsiveAppBar data={navItems} scrollTo={scrollTo}></ResponsiveAppBar>
      <Container maxWidth="xl">
        <Box sx={{ p: 2, mt: 7 }}>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <br></br>
              <PictureCard></PictureCard>
            </Grid>
            <Grid ref={aboutme} item xs={12} md={9}>
              <AboutmeCard></AboutmeCard>
            </Grid>
            <Grid ref={projects} item xs={12}>
              <ProjectsCard></ProjectsCard>
            </Grid>
            <Grid ref={hobbies} item xs={12}>
              <HobbiesCard></HobbiesCard>
            </Grid>
            <Grid ref={resume} item xs={12}>
              <ResumeCard></ResumeCard>
            </Grid>
          </Grid>

        </Box>
      </Container>



    </div>
  );
}

export default App;
