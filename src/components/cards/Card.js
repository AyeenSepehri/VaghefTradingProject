import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import classes from "./Card.module.css"


export default function MultiActionAreaCard(props) {

  //set a state for hover on Cards
  const [hoverStatus, setHoverStatus] = useState(false)

  //set onHover Card
  const onHoverImage = (e) => {
    e.preventDefault()
    setHoverStatus(true)
  }

  //set leave mouse on cards
  const outHoverImage = (e) => {
    e.preventDefault()
    setHoverStatus(false)
  }


  return (
    <Card sx={{ maxWidth: 345, my: 2, display: "inline-block", mx: 2 }} className={classes.root}>
      <CardActionArea
        sx={{ height: 300 }}
        onMouseEnter={onHoverImage}
        onMouseLeave={outHoverImage}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt=""
          className={classes.poster}
        />
        <div className={classes.description}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">ّ
              {props.detail}
            </Typography>
          </CardContent>
          <CardActions>
          {hoverStatus ? <Button size="large" color="primary">
            مشاهده جزئیات
          </Button> : <Button size="small" color="primary" sx={{ visibility: "hidden" }}/>}
          </CardActions>
        </div>
      </CardActionArea>
    </Card>
  );
}