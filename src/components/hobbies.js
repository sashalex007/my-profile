import * as React from 'react';
import Typography from '@mui/material/Typography';
import HobbiesTemplateCard from './hobbiesTemplate';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import getHobbyData from '../cardData/hobbyData'


export default function HobbiesCard() {

    const hobbiesData = getHobbyData()

    return (

        <Container>
            <br></br>
            <Typography gutterBottom variant="h4" component="div">
                Hobbies
            </Typography>
            <br></br>

            <Grid container spacing={3}>
                {hobbiesData.map(block => HobbiesTemplateCard(block))}
            </Grid>
            <br></br>
        </Container>

    );
}