import Image from 'next/image'
import hero from '../assets/cup-of-coffee-1280537_1280.jpg';
import Link from 'next/link';
import style from "./style.module.css"

const Container = () => {
  return (<>
    <div className={style.homepage_container}>
    <div className={style.homepage_container_hero}>
    <ul className={style.homepage_container_nav}>
    <li  className={style.homepage_container_nav_item}>
<Link className={style.homepage_container_nav_item_link} href="/experience"> <span className={style.main_nav}>.01 &nbsp;
    <span className={style.sub_nav}>Experience</span></span></Link>      
    </li>
    <li  className={style.homepage_container_nav_item}>
<Link className={style.homepage_container_nav_item_link} href="/skills"> <span className={style.main_nav}>.02 &nbsp;
    <span className={style.sub_nav}>Skills</span></span></Link>      
    </li>
    <li  className={style.homepage_container_nav_item}>
<Link className={style.homepage_container_nav_item_link} href="/projects"> <span className={style.main_nav}>.03 &nbsp;
    <span className={style.sub_nav}>Projects</span></span></Link>      
    </li>
    </ul>
    </div>
</div>



</>
  )
}

export default Container