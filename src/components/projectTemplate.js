import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function ProjectTemplateCard(data) {

    return (
        <Grid item xs>
            <Card variant="outlined" sx={{ minWidth: 250 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions>

                    {data.links.map(block => createButton(block))}

                </CardActions>
            </Card>
        </Grid>
    );
}

function createButton(data) {
    return (
        <Button href={data.link} target="_blank" size="small">{data.name}</Button>
    );
}
