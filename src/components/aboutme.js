import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function AboutmeCard() {
  return (
    <Card elevation={0}  sx={{ maxWidth: 'auto', mx: 'auto', height: '100%' }}>

      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          About me
        </Typography>
        <Typography variant="body2" color="text.secondary">

        &emsp; Software developer, studied physics at Carleton University. Experienced in web development (full-stack), android development, Java, and C++ for my hardware projects. I am a big believer in self-teaching, nothing is impossible! (for those who read documentation ;) )
<br></br><br></br>

I discovered my passion for programming in University and since opening a small business in the Health-Food industry over 6 years ago, I have been constantly expanding my knowledge to build new software tools to keep up with the demands of my business. 

<br></br><br></br>

My belief in self-learning, combined with taking on big projects, has left me with a very robust approach to writing code. Having had the benefit of learning many different tools, frameworks, and languages; I have come to the understanding that the core computer science fundamentals are unchanging. "Do you know X language/framework?" - this is my least favourite question. In my view, a flexible programmer with a firm grasp of the fundamentals (data structures and algorithms) can learn anything to a high degree of competence in a very short amount of time...particularly with the quality of resources and documentation that we have access to today. So my answer to my least favourite question? "In 24 hours, I will". 
<br></br><br></br>

I love solving problems that challenge my abilities. My areas of interest are time & space complexity optimization and dynamic programming. 

        </Typography>
      </CardContent>

    </Card>

  );
}
