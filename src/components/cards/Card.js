import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 , my: 2 , display: "inline-block" , mx: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {props.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}