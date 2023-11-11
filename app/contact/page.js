"use client"
import { useState } from "react";
import "../contact/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { LinkedIn } from "@mui/icons-material";
import { LocationCity } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";


export default function Contact() {
  


  return (
 <>
  
 <div  className="contact-info">
 <div id="card1" className="card">
 <FontAwesomeIcon className="icon"  icon={faMailBulk} />
   <div  className="card-content">
     <h3>Email</h3>
    <a href="mailto:aishwariya.ghosal04@gmail.com"><span>aishwariya.ghosal04@gmail.com</span></a> 
   </div>
 </div>
 <div id="card2" className="card">
 <LocationCity className="icon"  />
   <div  className="card-content">
     <h3>Address</h3>
     <span>22 Joy Krishna Ghosal road,kolkata-700057</span>
   </div>
 </div>


<div id="card3" className="card">
<LinkedIn className="icon" />
 <div  className="card-content">
   <h3>Linkedin</h3>
<a target="_blank" href="https://www.linkedin.com/in/aishwariya-ghosal-25a597184/">   <span>https://www.linkedin.com/in/aishwariya-ghosal-25a597184/</span></a>
 </div>
</div>

<div id="card4" className="card">
<GitHub className="icon" />
 <div  className="card-content">
   <h3>Github</h3>
   <a target="_blank" href="https://github.com/Dev-AG1999"> <span>https://github.com/Dev-AG1999</span></a>
 </div>
</div>
</div>


 </>

  );
}