import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProjectTemplateCard from './projectTemplate';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';


export default function ProjectsCard() {

    let projectData = [
        {
            name: 'Hivebase',
            description: 'SaaS for large scale apiculture applications',
            img: '/img/projects/hivebase.png',
            links: [{name: 'Link', link: 'https://hivebase.net'}]
        },
        {
            name: 'Robota',
            description: 'Open-source crypto trading bot',
            img: '/img/projects/robota.png',
            links: [{name: 'Demo', link: 'https://robota-bitmex-bot.herokuapp.com/console'}, {name: 'Github', link: 'https://github.com/sashalex007/robota-bitmex-trading-bot'}]
        },
        {
            name: 'Crypto analysis',
            description: 'Strategy backtesting simulator and historical data downloader',
            img: '/img/projects/crypto.png',
            links: [{name: 'Github 1', link: 'https://github.com/sashalex007/Backtesting-simulator'}, {name: 'Github 2', link: 'https://github.com/sashalex007/bitmex-historical-data-downloader'}]
        },
        {
            name: 'Textract-Wave ',
            description: 'Textract-waveapp integration for automated invoice creation from standardized purchase orders',
            img: '/img/projects/textract.gif',
            links: [{name: 'Github', link: 'https://github.com/sashalex007/Textract-Wave-Invoicing-Server'}]
        },
        {
            name: 'nRF51',
            description: 'Firmware and mobile app for nRF51and mpu6050 utilization in high performance applications',
            img: '/img/projects/nrf51.png',
            links: [{name: 'Github 1', link: 'https://github.com/sashalex007/nrf51_mbedOS_MPU6050'}, {name: 'Github 2', link: 'https://github.com/sashalex007/nrf51_MPU6050_calibrate'}, {name: 'Github 3', link: 'https://github.com/sashalex007/nrf51_android_app'}]
        },
        {
            name: 'SpeedDrive',
            description: 'The most popular direct drive conversion for the ender3 3d-printing platform',
            img: '/img/projects/speeddrive.png',
            links: [{name: 'Thingiverse', link: 'https://www.thingiverse.com/thing:3816051'}, {name: 'Github', link: 'https://github.com/sashalex007/speedDrive'}]
        }
    ]

    return (
       
        <Container>
            
                <Typography gutterBottom variant="h4" component="div">
                    Projects
                </Typography>

                <br></br>
                <Grid container spacing={3}>
                    {projectData.map(block => ProjectTemplateCard(block))}
                </Grid>

                <br></br>
                </Container>

    );
}