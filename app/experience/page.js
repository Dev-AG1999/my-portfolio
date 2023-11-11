
import "../experience/experience.css"
import {ExperienceData} from "../data"

import Cards from "../components/card"
export default function Experience() {
    return (<div className="experience_container"><div className="card_container">{
        ExperienceData.map((data)=>(
            <Cards key={data.id} img={data.img} description={data.Responsibility}  company={data.company} techstack={data.techStack}/>
        ))
    }</div>



       </div>)
}