"use client"
import React,{useState} from 'react'
import LinesEllipsis from 'react-lines-ellipsis';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const Cards = ({techstack,description,company,img,DEMO,CODE,URL,project}) => {
    const [truncated, setTruncated] = useState(true);
  return (
    <Card className='card d-flex=justify-content-between' style={{padding:"10px 0"}}  >
 
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
        style={{objectFit:"contain"}}
      />
      <CardContent id="card-content" style={{overflow:"Scroll"}}>
        <Typography gutterBottom fontSize="16px">
       {company}
        </Typography>
        <div fontSize="14px" variant="body2" color="text.secondary">
        {truncated?<LinesEllipsis text= {description}
        maxLine='2'
        ellipsis={... <button id='seemore' onClick={() => setTruncated(!truncated)}>Read More</button>}
        basedOn='words'
      /> : <>{description} <button id='seeless' onClick={() => setTruncated(!truncated)}>Less</button></>
    }
       
        </div>
      </CardContent>

    <CardActions>
    <Typography fontSize="12px" padding="0 10px"  color="text.secondary">
    {techstack}
    </Typography>
    </CardActions>

    {
      project===true &&
      <span className='button-container'>  <a target='_blank' href={URL}> <Button>{DEMO}</Button></a>
      </span>
    }

  </Card>
  )
}

export default Cards