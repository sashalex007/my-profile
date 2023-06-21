import * as React from 'react';
import Typography from '@mui/material/Typography';
import ProjectTemplateCard from './projectTemplate';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import getProjectData from '../cardData/projectData'

export default function ProjectsCard() {

    let projectData = getProjectData()

    return (

        <Container>

            <Typography gutterBottom variant="h4" component="div">
                Things I've made
            </Typography>

            <br></br>
            <Grid container spacing={3}>
                {projectData.map(block => ProjectTemplateCard(block))}
            </Grid>
            <br></br>

        </Container>

    );
}