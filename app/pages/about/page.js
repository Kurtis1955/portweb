import React from 'react'
import { Typography } from '@mui/material';
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCircle } from "react-icons/fa6";
import Image from 'next/image';
import CSSIcon from '../../../assets/skill_icons/css-3.png';
import HtmlIcon from '../../../assets/skill_icons/html.png';
import JSIcon from '../../../assets/skill_icons/js.png';
import ReactIcon from '../../../assets/skill_icons/react.png';
import SassIcon from '../../../assets/skill_icons/sass.png';
import NextIcon from '../../../assets/skill_icons/nextjs-icon.png';
import TailwindIcon from '../../../assets/skill_icons/tailwind.png';
import NodeIcon from '../../../assets/skill_icons/nodejs.png';
import style from "../../../styles/pages/about.module.scss";

const About_me = () => {
  const skillIcons = [
    {
      id: '1',
      url: JSIcon,
      description: "JavaScript",
    },
    {
      id: '2',
      url: ReactIcon,
      description: "ReactJs",
    },
    {
      id: '3',
      url: NextIcon,
      description: "NextJs",
    },
    {
      id: '4',
      url: NodeIcon,
      description: "NodeJS",
    },
    {
      id: '5',
      url: SassIcon,
      description: "SASS",
    },  
    {
      id: '6',
      url: TailwindIcon,
      description: "TailWind",
    },
    {
      id: '7',
      url: HtmlIcon,
      description: "HTML",
    },
    {
      id: '8',
      url: CSSIcon,
      description: "CSS" ,
    },
  ]
  return (
    <div className={style.container}>
      <div className={style.aboutSection}>
        <Typography variant='h3'className={style.headText}>About</Typography>
        <div className={style.bodyContainer}>
          <span className={style.span}></span>
          <Typography variant='body2' className={style.bodyText}>
            Highly skilled frontend developer with a passion for creating user-friendly and visually appealing
            websites. Proficient in vanilla JavaScript, ReactJS,Next and SASS. Experienced in Tailwind CSS, UI/UX
            design using Figma, and professional graphics design with Photoshop. Also, skilled in cross-platform
            mobile app development with both Flutter or React Native, beginner in backend development with
            Node.js. Avid reader with a deep appreciation for self development
            books and a genuine love for kids. Seeking a challenging position to utilize my skills and contribute to the success of innovative projects.
          </Typography>
        </div>
      </div>

      <div className={style.skillSection}>
        <Typography variant='h3'className={style.skillText}>SKILLS</Typography>
        <div className={style.skillDetails}>
          {skillIcons.map((skills) => (
          <div className={style.cards} key={skills.id}>
            <Image  src={skills.url} alt={skillIcons.description} width={50} height={60} />
            <p style={{fontSize:'1.2vw', fontWeight:700,color:"#ffff"}}>{skills.description}</p>
          </div>
          ))}
        </div>
      </div>

      <div className={style.expertContainer}>
        <Typography variant='h3'className={style.expertText}>Experience</Typography>
        <div className={style.expertCards}>
              <div className={style.cardOne}>
                    <span >2022</span>
                    <BiSolidRightArrow size={53} color={'#12182b'}/>
                    <FaCircle size={30} color={ '#FF4F00'} className={style.glow}/>
                    <hr className={style. vertical} />
                       <div className={style.miniCard}>
                             <Typography variant='h4'className={style.freeText}>HTML & CSS</Typography>
                             <Typography variant='body2'className={style.bodyText}>
                                    As a frontend developer with extensive experience in HTML and CSS, 
                                    I've had the privilege of crafting visually appealing and user-friendly 
                                    websites and web applications. Leveraging my expertise in semantic 
                                    HTML markup and CSS styling techniques, I've transformed design 
                                    concepts into responsive and pixel-perfect interfaces that engage 
                                    users and deliver an exceptional browsing experience across devices. 
                                    Whether it's designing elegant layouts, creating intuitive navigation menus, 
                                    or optimizing performance for fast loading times, I'm passionate about combining 
                                    aesthetics with functionality to achieve the client's goals. 
                                    Collaborating closely with designers and backend developers, 
                                    I've played a key role in turning creative visions into reality, 
                                    ensuring consistency in design and brand identity throughout the development process. 
                                    Additionally, staying updated with the latest frontend frameworks and technologies, 
                                    such as CSS preprocessors like Sass or CSS-in-JS libraries, I continuously seek to enhance 
                                    my skills and deliver innovative solutions that push the boundaries of web design
                             </Typography>
                       </div>

          </div>

          <div className={style.cardOne}>
                 <span >2022</span>
                 <BiSolidRightArrow size={53} color={'#12182b'}/>
                 <FaCircle size={30} color={ '#FF4F00'} className={style.glow2}/>
                 <hr className={style. vertical_2} />
                 <div className={style.sepCont}>
                 <div className={style.miniCard}>
                        <Typography variant='h4'className={style.freeText}>JavaScript</Typography>
                        <Typography variant='body2' className={style.bodyText}>
                               With JavaScript, I've enhanced user interactions by implementing dynamic features such as form validation,
                               interactive elements, and smooth animations.
                               I've also developed custom solutions for website functionality, including sliders, modals, and navigation menus,
                               using vanilla JavaScript.
                               Additionally, I have experience in optimizing website performance through techniques such as lazy loading images,
                               minimizing render-blocking resources, and optimizing code for faster load times.
                               My expertise extends to troubleshooting cross-browser compatibility issues, ensuring that websites function seamlessly across different browsers and devices.                      
                               I am dedicated to crafting intuitive and visually appealing user interfaces while prioritizing usability, accessibility, and performance.
                       </Typography>
                 </div>
                 </div>
          </div>

          <div className={style.cardOne}>
                 <span >2023</span>
                 <BiSolidRightArrow size={53} color={'#12182b'}/>
                 <FaCircle size={30} color={ '#FF4F00'} className={style.glow3}/>
                 <hr className={style.vertical_3} />
                 <div className={style.sepCont}>
                 <div className={style.miniCard}>
                        <Typography variant='h4'className={style.freeText}>REACT & NEXT.JS</Typography>
                        <Typography variant='body2' className={style.bodyText}>
                              As a frontend developer experienced in React and Next.js, 
                              I bring a wealth of knowledge and expertise to my projects.
                              React has revolutionized the way we build user interfaces, 
                              with its component-based architecture and virtual DOM rendering 
                              providing developers with powerful tools for creating dynamic and 
                              responsive web applications.\n
                              With Next.js, I've taken advantage of server-side rendering and static site 
                              generation to optimize performance and improve SEO, delivering fast-loading 
                              and search engine-friendly websites.\n
                              Leveraging the latest features and best practices in React and Next.js, 
                              I've developed scalable and maintainable applications that meet the needs of clients and users alike.
                              Whether it's building interactive user interfaces, integrating with backend APIs, 
                              or optimizing performance for production deployment, 
                              I'm committed to delivering high-quality solutions that drive results.
                        </Typography>
                 </div>
                 </div>
          </div>

          <div className={style.cardOne}>
                 <span >2023</span>
                 <BiSolidRightArrow size={53} color={'#12182b'}/>
                 <FaCircle size={30} color={ '#FF4F00'} className={style.glow4}/>
                 <hr className={style.vertical_4} />
                 <div className={style.sepCont}>
                 <div className={style.miniCard}>
                        <Typography variant='h4'className={style.freeText}>REACT NATIVE</Typography>
                        <Typography variant='body2' className={style.bodyText}>
                                Currently undergoing training in React Native as a frontend developer, 
                                I am excited to broaden my skill set and venture into mobile app development.
                                React Native presents an exciting opportunity to leverage my existing knowledge 
                                in React and JavaScript to build robust and cross-platform mobile applications.
                                Through comprehensive training programs and practical hands-on experience, 
                                I am honing my skills in creating engaging user interfaces, integrating with native 
                                device features, and optimizing performance for mobile devices.
                                I am passionate about embracing new technologies and constantly seeking opportunities 
                                to enhance my proficiency in React Native development.
                                With a dedicated focus on learning and growth, I am excited to embark on 
                                this journey into mobile app development and contribute to the creation of innovative and impactful mobile experiences.
                        </Typography>
                            
                 </div>
                 </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About_me;