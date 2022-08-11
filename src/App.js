import ResponsiveAppBar from './components/navbar'
import PictureCard from './components/picture';
import AboutmeCard from './components/aboutme';
import ProjectsCard from './components/projects';
import HobbiesCard from './components/hobbies';
import ResumeCard from './components/resume';
import ContactCard from './components/contact';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useRef } from 'react';
import { useMediaQuery } from '@mui/material';

function App() {

  const aboutme = useRef()
  const projects = useRef()
  const hobbies = useRef()
  const resume = useRef()
  const contact = useRef()

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
    },
    {
      name: 'Contact',
      ref: contact
    }
  ]

  function scrollTo(ref) {
    if (ref && ref.current) {
      setTimeout(function () {
        let target = ref.current
        let pos = target.style.position;
        let top = target.style.top;
        target.style.position = 'relative';
        target.style.top = '-64px';
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        target.style.top = top;
        target.style.position = pos;
      }, 1)
    }
  }

  const isXs = useMediaQuery("(max-width:600px)");
  const styleXs = { p: 0, mt: 7, mb: 7 };
  const styleSm = { p: 2, mt: 7, mb: 7 };

  return (
    <div className="App">
      <ResponsiveAppBar data={navItems} scrollTo={scrollTo}></ResponsiveAppBar>

      <Container maxWidth="xl">
        <Box sx={isXs ? styleXs : styleSm}>

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
            <Grid ref={contact} item xs={12}>
              <ContactCard></ContactCard>
            </Grid>
          </Grid>

        </Box>
      </Container>

    </div>
  );
}

export default App;
