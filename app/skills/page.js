
import "../skills/skills.css"
import { SkillsData} from "../data"
import Cards from "../components/skill"
export default function Skills() {
    return (<div className="experience_container"><div className="card_container">{
      SkillsData.map((data)=>(
            <Cards key={data.id} img={data.logo}/>
        ))
    }</div>



       </div>)
}