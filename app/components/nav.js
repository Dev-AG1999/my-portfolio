"use client"
import Link from 'next/link';
import "../components/nav.css";
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close"
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';



const Nav= () => {

  const [open, setopen] = useState(false)
  const {pathname}=useRouter()

  const handleClick=()=>{
    setopen(true)
  }

useEffect(() => {
  window.screenTop="20px";
var elem=document.getElementById("navigation_container");
elem.style.background="black"


}, [])

  return (
    <nav id='navigation_container'  className="navigation_container">
<div className='navigation_container_logo'>
<img className='navigation_container_logo_img'  src='/logo-png.png' />
</div>


<Box component="div" sx={{ display: { xs: 'block', md: 'none', lg: 'none' } }} className='navigation_container_hamburger'>

{
  open===false &&
  <MenuIcon stroke="white" fill="white" onClick={()=>setopen(true)}/>
}

{
  open===true &&
  
  <Box component="div" className='navbar_item_small' sx={{flexDirection: 'column',backgroundColor:"#7a1e90" ,height:"auto",display:"flex" ,position:"absolute", right:"inherit"}} >

  <CloseIcon stroke="white" fill="white" onClick={()=>setopen(false)}/>

<ul>
<li><Link className={` ${pathname==="/" && "ACTIVE"}`} href="/">Home</Link> </li>
<li>
<Link className={` ${pathname==="/about" && "ACTIVE"}`} href="/about">About</Link></li>
<li><Link className={` ${pathname==="/contact" && "ACTIVE"}`} href="/contact ">Contact</Link>
</li>
<li><Link className={` ${pathname==="/experience" && "ACTIVE"}`} href="/experience">Experience</Link> </li>
<li><Link className={` ${pathname==="/skills" && "ACTIVE"}`} href="/skills">Skills</Link> </li>
<li><Link className={` ${pathname==="/projects" && "ACTIVE"}`} href="/projects">Projects</Link> </li>
</ul>


   </Box>
  }

</Box>



<Box  component="div"  id="navigation_container_item_wrapper" className='navigation_container_item_wrapper'>
<Link className="navigation_container_item" href="/">Home</Link>{' '}
<Link className="navigation_container_item" href="/about">About</Link>{' '}
<Link className="navigation_container_item" href="/contact ">Contact</Link>
 </Box>

  
    
</nav>
  )
}

export default Nav