import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AboutmeCard() {
  return (
    <Card sx={{ maxWidth: 'auto', mx: 'auto', height: '100%' }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About me
        </Typography>
        <Typography variant="body2" color="text.secondary">

        Self-taught full-stack web and mobile developer. Sole developer behind Hivebase.net (a SaaS for large-scale apiculture). Cryptocurrency enthusiast; developed open-source tools for automated trading and market analysis. Hardware enthusiast; developed open-source c++ projects on the ARM nrf51 platform, and various personal projects. 3d printing enthusiast; extensive development on the ender3 platform. Business owner since 2016, looking to start a new career in professional software development.


        </Typography>
      </CardContent>

    </Card>

  );
}
