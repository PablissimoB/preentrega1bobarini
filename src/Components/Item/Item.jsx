import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import style from "./Item.module.css"


const Item = ({element}) => {
  return (
    <Card className={style.item}>
        <CardMedia 
            className={style.image}
            image= {element.img}
        />
        <CardContent>
            <Typography> {element.title}</Typography>
            <Typography> $ {element.price}</Typography>
        </CardContent>
        <CardActions>
            <Link to={`/item/${element.id}`}>
            <Button>
                Detalle
            </Button>
            </Link>
        </CardActions>
    </Card>
  )
}

export default Item
