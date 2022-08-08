import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function PictureCard() {
  return (
    <Card sx={{ maxHeight: '100', maxWidth: 'auto', mx: 'auto' }}>
      <CardMedia
        component="img"
        height="auto"
        image="/img/avatar.jpeg"
        alt="green iguana"
      />
    </Card>
  );
}
