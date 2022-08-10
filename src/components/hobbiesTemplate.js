import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActions } from '@mui/material';



export default function HobbiesTemplateCard(data) {

    return (
        <Grid item xs={12}>
            <Card elevation={5} >

                <Grid container>
                    <Grid item xs={3}>
                        <CardMedia
                            component="img"
                            image={data.img}
                            height="100%"
                            alt={data.name}
                        />
                    </Grid>

                    <Grid item xs={9}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.description}
                            </Typography>
                        </CardContent>
                        <CardActions>

                        <Grid container spacing={2}>
                        {data.links.map(block => createButton(block))}
                        </Grid>
                           
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

function createButton(data) {
    return (
        <Grid item>
        <Button href={data.link} target="_blank" size="small">{data.name}</Button>
        </Grid>     
    );
}
