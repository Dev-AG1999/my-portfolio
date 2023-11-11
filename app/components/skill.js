"use client"
import React,{useState} from 'react'
import LinesEllipsis from 'react-lines-ellipsis';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = ({techstack,description,company,img}) => {
    const [truncated, setTruncated] = useState(true);
  return (
    <Card className='skillcard'>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
    </CardActionArea>
   
  </Card>
  )
}

export default Cards