import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function ProjectTemplateCard(data) {

    return (
        <Grid item xs>
            <Card elevation={5}  sx={{maxWidth: 600, minWidth: 250, height: '100%' }}>
            <CardActionArea href={data.links[0].link} target="_blank">
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
                </CardActionArea>
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
