"use client"
import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import {  CardActionArea } from '@mui/material';
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