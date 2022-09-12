import * as React from 'react';
import Typography from '@mui/material/Typography';
import ProjectTemplateCard from './projectTemplate';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import getBlogData from '../cardData/blogData'

export default function BlogCard() {

    let blogData = getBlogData()

    return (

        <Container>
            <br></br>
            <Typography gutterBottom variant="h4" component="div">
                Blog posts
            </Typography>

            <br></br>
            <Grid container spacing={3}>
                {blogData.map(block => ProjectTemplateCard(block))}
            </Grid>
            <br></br>

        </Container>

    );
}