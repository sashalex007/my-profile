import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HobbiesTemplateCard from './hobbiesTemplate';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { Button } from '@mui/material';


export default function ResumeCard() {


    return (

        <Container>
            <br></br>
            <Typography gutterBottom variant="h4" component="div">
                Resume 
            </Typography>
            <br></br>

            <Button href='/img/resume.pdf' download='alexpokhodoun_resume' size="small">Download File</Button>
            <br></br><br></br>

            <iframe
                src="https://drive.google.com/file/d/17fM3uIGlEAwwXvXZpigiGW9CMB8dj_Hi/preview"
                frameBorder="0"
                scrolling="auto"
                height="600"
                width="100%"
            ></iframe>


        </Container>

    );
}