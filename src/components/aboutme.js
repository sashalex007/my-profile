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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

    </Card>

  );
}
