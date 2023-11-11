"use client"
import "../projects/experience.css"
import {ProjectsData} from "../data"
import Cards from "../components/card"
import { useState } from "react"
export default function Projects() {
  
    const [project, setproject] = useState(true)
    return (
    
        <div className="projects_container "><div className="card_container">{
    ProjectsData.map((data)=>(
<>
         <Cards project={project} URL={data.url} key={data.id} DEMO="SEE DEMO" CODE="SOURCE CODE" img={data.img}/>
   

  
      
       </>
        ))

    }</div>




       </div>
     
       )
}