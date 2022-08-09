import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HobbiesTemplateCard from './hobbiesTemplate';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


export default function HobbiesCard() {

    let hobbiesData = [
        {
            name: '3d printing',
            description: 'I am a passionate member of the 3d printing community. I am an active developer of the ender3 platform. My open-source SpeedDrive designs have revolutionized the capability of the most widely used FDM platform on the market. My design philosophy and approach to optimizing 3d printer kinematics have also sparked innovation across a wide array of platforms.',
            img: require('../img/hobbies/printing.png'),
            links: [{ name: 'Thingiverse profile', link: 'https://www.thingiverse.com/sashalex007/designs' }]
        },
        {
            name: 'Alpine skiing',
            description: 'My other great passion is alpine skiing. My love for this sport actually inspired me to get into 3d printing. I am a lifelong nerd and tinkerer, so in my pursuit of higher performance I saw the potential of 3d printing in the rapid manufacturing of custom ski boot components (see links to repo). The fusion of these passions has been very rewarding. I keep a YouTube channel to document my skiing progress over the years. I love improving and helping others; I also run a discord server for the tech-ski community.',
            img: require('../img/hobbies/ski.jpeg'),
            links: [{ name: 'youtube', link: 'https://www.youtube.com/c/nSkier' }, { name: 'Discord', link: 'http://technicalski.com' }, { name: 'Hardware 1', link: 'https://github.com/sashalex007/ski-boot-sole-canting' }, { name: 'Hardware 2', link: 'https://github.com/sashalex007/ski-boot-cuff-canting' }]
        },
        {
            name: 'Tennis',
            description: 'Although relatively new to the sport of tennis (3 years), it has become a bit of an obsession! Naturally, it wasnt long before my nerd-senses started tingling and I jumped into the deep rabbithole that is racquet customization. Using my 3d modeling/printing skills, I developed methods of customization offered by only a handful of tennis shops around the world. Needless to say, the technology is way overkill for my level of skill :)',
            img: require('../img/hobbies/tennis.png'),
            links: [{ name: 'Github 1', link: 'https://github.com/sashalex007/Backtesting-simulator' }, { name: 'Github 2', link: 'https://github.com/sashalex007/bitmex-historical-data-downloader' }]
        },
    ]

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