// app/layout.js
import Nav from "./components/nav"
import { Roboto } from 'next/font/google'
import style from './style.module.css'
import Link from "next/link"
 import Index from "./page"
 import Container from "./container"
 import 'mdb-ui-kit/css/mdb.min.css';
 import { Facebook } from "@mui/icons-material"
 import { Email } from "@mui/icons-material"
 import {Instagram } from "@mui/icons-material"
 import { GitHub } from "@mui/icons-material"
 import { LinkedIn } from "@mui/icons-material"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
     return (
         <html className={roboto.className}>
           
             <body className={style.body}  style={{margin:"0",padding:"0"}}>
               <Nav/>
      <Container/>
                 {children}
                 <footer className=" text-center text-white d-flex w-100" style={{background:"#7a1e90"}}>

  <div className="container row p-4 d-flex w-100 justify-content-between ">
  
    <section className="mb-4 col-sm-6 ">
    
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/aishwariya.ghosal04" role="button"
        ><Facebook/></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="mailto:aishwariya.ghosal04@gmail.com" role="button"
        ><Email/></a>

 
 
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/aishwariya-ghosal-25a597184/" role="button"
        ><LinkedIn/></a>


      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Dev-AG1999" role="button"
        ><GitHub/></a>

  
    </section>


  

   


    <section className="d-flex justify-content-end w-50 col-sm-6 container" >
   
      <div className="row d-flex flex-row justify-content-between">
     
        <div className="col-6  mb-4 mb-md-0">
         

          <ul className={style.implinks}>
            <li>
              <a href="/" className="text-white is-active">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white is-active">About</a>
            </li>
            <li>
              <a href="/contact" className="text-white is-active">Contact</a>
            </li>
           
          </ul>
        </div>
   
        <div className="col-6 mb-4 mb-md-0">
         


        <ul className={style.implinks}>
            <li>
              <a href="/experience" className="text-white is-active">Experience</a>
            </li>
            <li>
              <a href="/skills" className="text-white is-active">Skills</a>
            </li>
            <li>
              <a href="/projects" className="text-white is-active">Projects</a>
            </li>
          
          </ul>
        </div>
     
     
   
     
  
      </div>
   
    </section>
      
  </div>
  




</footer>
             </body>
         </html>
     )
}