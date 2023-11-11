"use client"
import { Box, List, Typography } from "@mui/material";
import "../about/about.css"
import Profile from '../../assets/310144956_1514324079012994_5827464339962735330_n.jpg'
import { useState } from "react";
import Image from "next/image";
import LinesEllipsis from "react-lines-ellipsis";
export default function About() {

    const [truncated, setTruncated] = useState(true);
    return (<div className="about_container">
<Box component="div" sx={{width:"100%",height:"450px",backgroundImage:"url(https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80)",
backgroundAttachment: "fixed",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
transition:"all 0.3s ease",
backgroundSize: "cover"}}>

</Box>
<Box component="div" sx={{height:"100px",backgroundColor:"white",width:"100%"}}>
<h1 style={{textAlign:"center",color:"#252525",letterSpacing:"2px",marginTop:"20px"}}>READ ABOUT ME</h1>
</Box>

<Box component="div" sx={{height:"auto",width:"100%",backgroundColor:"white",position:"relative"}}>
<Box className="about-wrapper" component="div" sx={{height:"100%",backgroundColor:"white",width:"80%",margin:"auto",display:"flex"}}><Box component="div" id="about-image" sx={{width:"50%",height:"100%"}}><Image id="about-iamge" alt="background"  style={{objectFit:"cover",borderRadius:"0%",width:"100%", height:"100%"}}  src={Profile}/></Box>

<Box className="objective-box"  component="div" sx={{height:"100%",backgroundColor:"white",margin:"auto",display:"flex",flexWrap:"wrap",height:"auto",padding:"20px",color:"white",borderRadius:"0.75rem"}}>
<Box><h1><strong> CAREER OBJECTIVE</strong> </h1>
<br></br>
Frontend Developer with proven experience of 2 years in Frontend Development,ability create and maintain a better code base for reusability. Passionate about learning and development with a desire to apply skills on a larger development team at every company I worked. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
<br></br>
<br></br>
Currently single handedly handeling  entire frontend of my current company's product.

<br></br>
<br></br>
</Box>




<br></br>







</Box>
</Box>

</Box>


        </div>)
}