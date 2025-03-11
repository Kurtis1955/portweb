import React from 'react'
import { Typography,Button } from 'antd';
// import { AiOutlineArrowRight } from "react-icons/ai";
import Image from 'next/image';
import PersonalImage from '../../../public/assets/profile.jpg';
import style from '../../../styles/pages/homepage.module.scss'

const HomePage = () => {
    
  return (
    <div className={style.mainContainer}>
        <div className={style.personalContainer}>
           <Typography className={style.nameBox}>THEOPHILUS AKOWUAH</Typography>
           <Typography className={style.skillBox}>  MOBILE & <span style={{color:'brown'}}>FRONT-END</span> DEVELOPER</Typography>
           
           <div className={style.miniBox}>
              <span className={style.emptyBox1}></span>
              <span className={style.emptyBox2}></span> 
              <span className={style.emptyBox3}></span> 
              
           </div> 
           
           <p className={style.detailBox}>I develop innovative solutions for WEB and MOBILE platforms, crafting seamless user experiences.
Need an expert in this technological field? I'm here to bring your ideas to life.
Don't hesitate to reach out and let's build something amazing together! 🚀
           </p>
           <Button className={style.talk}>Let's Vibe</Button>
        </div>

        <div className={style.profileImageBox}>
            <Image className= {style.profileImage} src={PersonalImage}/>
        </div>
    </div>
  )
}

export default HomePage;
