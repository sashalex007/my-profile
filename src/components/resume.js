import * as React from 'react';
import Typography from '@mui/material/Typography';
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

            <Button href={require('../img/resume.pdf')} download='alexpokhodoun_resume' size="small">Download File</Button>
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