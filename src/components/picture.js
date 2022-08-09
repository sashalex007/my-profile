import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function PictureCard() {
  return (
    <Card sx={{ maxHeight: 275, maxWidth: 400, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="auto"
        image="/img/avatar.jpeg"
        alt="AP"
      />
    </Card>
  );
}
