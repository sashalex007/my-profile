import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function AboutmeCard() {
  return (
    <Card elevation={0}  sx={{ maxWidth: 'auto', mx: 'auto', height: '100%', border: 0}}>

      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Hello!
        </Typography>
        <Typography variant="body2" color="text.secondary">

        &emsp;     I like building beautiful stuff. Experienced in web development (full-stack), android development, Java, Python and C++. I am a big believer in teamwork, vision, and self-learning. Nothing is impossible!
<br></br><br></br>

I love solving problems that enable me to build stuff that scales! My areas of interest are time & space complexity optimization, scalable architectures and beautiful UI's. 

<br></br><br></br>
        </Typography>
      </CardContent>

    </Card>

  );
}
