import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';

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

            <Card elevation={5} sx={{border: 0}} >

            <iframe
                src="https://drive.google.com/file/d/13POfuVYDwNEEca1zP9xmr5SWSODs9AJs/preview"
                frameBorder="0"
                scrolling="auto"
                height="400"
                width="100%"
                style={{
                    display: 'block'
                }}
            ></iframe>
            </Card>
            <br></br>
        </Container>
    );
}