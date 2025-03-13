import React from "react";
import { Typography } from "@mui/material";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";
import CSSIcon from "../../../assets/skill_icons/css-3.png";
import HtmlIcon from "../../../assets/skill_icons/html.png";
import JSIcon from "../../../assets/skill_icons/js.png";
import ReactIcon from "../../../assets/skill_icons/react.png";
import SassIcon from "../../../assets/skill_icons/sass.png";
import NextIcon from "../../../assets/skill_icons/nextjs-icon.png";
import TailwindIcon from "../../../assets/skill_icons/tailwind.png";
import NodeIcon from "../../../assets/skill_icons/nodejs.png";
import style from "../../../styles/pages/about.module.scss";

const About_me = () => {
  const skillIcons = [
    {
      id: "1",
      url: JSIcon,
      description: "JavaScript",
    },
    {
      id: "2",
      url: ReactIcon,
      description: "ReactJs",
    },
    {
      id: "3",
      url: NextIcon,
      description: "NextJs",
    },
    {
      id: "4",
      url: NodeIcon,
      description: "NodeJS",
    },
    {
      id: "5",
      url: SassIcon,
      description: "SASS",
    },
    {
      id: "6",
      url: TailwindIcon,
      description: "TailWind",
    },
    {
      id: "7",
      url: HtmlIcon,
      description: "HTML",
    },
    {
      id: "8",
      url: CSSIcon,
      description: "CSS",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.aboutSection}>
        <Typography variant="h5" className={style.headText}>
          About
        </Typography>
        <div className={style.bodyContainer}>
          <span className={style.span}></span>
          <Typography variant="body2" className={style.bodyText}>
            Dynamic Frontend Developer with a proven track record in building
            user-centric, visually stunning web applications. Proficient in
            JavaScript, React.js, Next.js, and SASS, with expertise in Tailwind
            CSS for modern, responsive designs. Skilled in UI/UX design using
            Figma, Penpot and professional graphics design with Photoshop.
            Experienced in cross-platform mobile development with React Native,
            and expanding backend knowledge with Java and Spring Boot framework.
            A two-time hackathon winner holding a bachelor's degree in computer
            science, I thrive under pressure and excel in collaborative
            environments, driving innovation in fast-paced teams. Passionate
            about self-improvement, leadership, and mentoring, with a deep
            appreciation for self-development books and a genuine love for
            inspiring young minds. Excited to contribute my expertise to
            groundbreaking projects.
          </Typography>
        </div>
      </div>

      <div className={style.skillSection}>
        <Typography variant="h3" className={style.skillText}>
          SKILLS
        </Typography>
        <div className={style.skillDetails}>
          {skillIcons.map((skills) => (
            <div className={style.cards} key={skills.id}>
              <Image
                src={skills.url}
                alt={skillIcons.description}
                width={51}
                height={60}
              />
              <p style={{ fontSize: "1.2vw", fontWeight: 700, color: "#ffff" }}>
                {skills.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.expertContainer}>
        <Typography variant="h3" className={style.expertText}>
          Experience
        </Typography>
        <div className={style.expertCards}>
          <div className={style.cardOne}>
            <div className="flex items-center mt-[-1rem] ">
              <span>2022</span>
              <BiSolidRightArrow
                size={51}
                color={"#12182b"}
                className="ml-[-0.75rem]"
              />
            </div>

            <div className="flex flex-col items-center justify-start gap-4">
              <FaCircle size={30} color={"#FF4F00"} className={style.glow} />
              <hr className={style.vertical} />
            </div>
            <div className={style.miniCard}>
              <Typography variant="h4" className={style.freeText}>
                Becoming Creation Limited Uk
              </Typography>
              <Typography variant="body2" className={style.bodyText}>
                {/* As a frontend developer with extensive experience in HTML and
                CSS, I've had the privilege of crafting visually appealing and
                user-friendly websites and web applications. Leveraging my
                expertise in semantic HTML markup and CSS styling techniques,
                I've transformed design concepts into responsive and
                pixel-perfect interfaces that engage users and deliver an
                exceptional browsing experience across devices. Whether it's
                designing elegant layouts, creating intuitive navigation menus,
                or optimizing performance for fast loading times, I'm passionate
                about combining aesthetics with functionality to achieve the
                client's goals. Collaborating closely with designers and backend
                developers, I've played a key role in turning creative visions
                into reality, ensuring consistency in design and brand identity
                throughout the development process. Additionally, staying
                updated with the latest frontend frameworks and technologies,
                such as CSS preprocessors like Sass or CSS-in-JS libraries, I
                continuously seek to enhance my skills and deliver innovative
                solutions that push the boundaries of web design */}
                Software Developer Intern, Becoming Creation Played a nice role
                in developing a cutting-edge web application from inception to
                completion, collaborating closely with the product team to
                understand requirements and translate them into technical
                specifications. Demonstrated expertise in programming languages
                such as JavaScript, HTML and CSS, adhering to best practices and
                design patterns to build scalable and maintainable software
                modules. Proactively resolved technical challenges, optimizing
                application performance and enhancing user experience. Conducted
                code reviews, providing valuable feedback to colleagues and
                contributing to a collaborative and quality-driven development
                environment. Integrated third-party APIs and services into the
                software ecosystem, ensuring seamless interactions with external
                systems and expanding functionality. Actively participated in
                project discussions, offering insightful suggestions and
                solutions that aligned with business requirements. Kept abreast
                of emerging technologies and industry trends, attending
                conferences and workshops to continually enhance skills and
                knowledge.
              </Typography>
            </div>
          </div>

          <div className={style.cardOne}>
            <div className="flex items-center mt-[-1rem]">
              <span>2023</span>
              <BiSolidRightArrow
                size={51}
                color={"#12182b"}
                className="ml-[-0.75rem]"
              />
            </div>

            <div className="flex flex-col items-center justify-start gap-4">
              <FaCircle size={30} color={"#FF4F00"} className={style.glow2} />
              <hr className={style.vertical_2} />
            </div>
            <div className={style.sepCont}>
              <div className={style.miniCard}>
                <Typography variant="h4" className={style.freeText}>
                  Frontend Developer, 360Botech Development
                </Typography>
                <Typography variant="body2" className={style.bodyText}>
                  {/* With JavaScript, I've enhanced user interactions by
                  implementing dynamic features such as form validation,
                  interactive elements, and smooth animations. I've also
                  developed custom solutions for website functionality,
                  including sliders, modals, and navigation menus, using vanilla
                  JavaScript. Additionally, I have experience in optimizing
                  website performance through techniques such as lazy loading
                  images, minimizing render-blocking resources, and optimizing
                  code for faster load times. My expertise extends to
                  troubleshooting cross-browser compatibility issues, ensuring
                  that websites function seamlessly across different browsers
                  and devices. I am dedicated to crafting intuitive and visually
                  appealing user interfaces while prioritizing usability,
                  accessibility, and performance. */}
                  At 360Botech Development, I developed and optimized scalable
                  web applications using React, Next.js, and TypeScript. I
                  focused on building responsive, pixel-perfect UI components
                  with HTML, CSS, and Tailwind CSS, ensuring seamless user
                  experiences across devices. To enhance performance and SEO, I
                  implemented Next.js features such as Server-Side Rendering
                  (SSR) and Static Site Generation (SSG). I also integrated
                  APIs, authentication systems, and payment gateways, improving
                  application functionality and security. Beyond coding, I
                  earned the{" "}
                  <strong className="text-amber-700">
                    Frontend Tech Lead role,
                  </strong>{" "}
                  where I conducted code reviews, collaborated with designers
                  and backend teams, and stayed updated with emerging
                  technologies to refine development workflows. I worked
                  extensively with React Hooks for state management, ensuring
                  efficient data flow across applications. Additionally, I
                  optimized frontend performance by implementing lazy loading
                  and code-splitting, reducing load times and enhancing user
                  retention. My role also involved debugging and troubleshooting
                  complex UI issues, ensuring smooth and bug-free experiences
                  for end users.
                </Typography>
              </div>
            </div>
          </div>

          <div className={style.cardOne}>
            <div className="flex items-center mt-[-1rem]">
              <span>2023</span>
              <BiSolidRightArrow
                size={51}
                color={"#12182b"}
                className="ml-[-0.75rem]"
              />
            </div>
            <div className="flex flex-col items-center justify-start gap-4">
              <FaCircle size={30} color={"#FF4F00"} className={style.glow3} />
              <hr className={style.vertical_3} />
            </div>
            <div className={style.sepCont}>
              <div className={style.miniCard}>
                <Typography variant="h4" className={style.freeText}>
                  {/* REACT & NEXT.JS */} Intern, Becoming Care Services
                </Typography>
                <Typography variant="body2" className={style.bodyText}>
                  {/* As a frontend developer experienced in React and Next.js, I
                  bring a wealth of knowledge and expertise to my projects.
                  React has revolutionized the way we build user interfaces,
                  with its component-based architecture and virtual DOM
                  rendering providing developers with powerful tools for
                  creating dynamic and responsive web applications.\n With
                  Next.js, I've taken advantage of server-side rendering and
                  static site generation to optimize performance and improve
                  SEO, delivering fast-loading and search engine-friendly
                  websites.\n Leveraging the latest features and best practices
                  in React and Next.js, I've developed scalable and maintainable
                  applications that meet the needs of clients and users alike.
                  Whether it's building interactive user interfaces, integrating
                  with backend APIs, or optimizing performance for production
                  deployment, I'm committed to delivering high-quality solutions
                  that drive results. */}
                  As a Software Developer intern, I developed and maintained web
                  applications to enhance healthcare workflows, improve patient
                  care, and optimize user experience. Worked closely with
                  healthcare professionals and stakeholders to understand
                  requirements and translate them into functional, scalable
                  solutions. Leveraged React, Next.js, and JavaScript to build
                  responsive and user-friendly interfaces, ensuring seamless
                  navigation and accessibility. Integrated APIs and backend
                  services to facilitate real-time data management while
                  prioritizing security and compliance with healthcare
                  regulations. Implemented best practices in UI/UX design,
                  ensuring a visually appealing and intuitive experience.
                  Conducted thorough code reviews, debugging, and performance
                  optimizations to deliver high-quality, maintainable software.
                </Typography>
              </div>
            </div>
          </div>

          <div className={style.cardOne}>
            <div className="flex items-center mt-[-1rem]">
              <span>2024</span>
              <BiSolidRightArrow
                size={51}
                color={"#12182b"}
                className="ml-[-0.75rem]"
              />
            </div>
            <div className="flex flex-col items-center justify-start gap-4">
              <FaCircle size={30} color={"#FF4F00"} className={style.glow4} />
              <hr className={style.vertical_4} />
            </div>
            <div className={style.sepCont}>
              <div className={style.miniCard}>
                <Typography variant="h4" className={style.freeText}>
                  {/* REACT NATIVE */} National Service as Frontend Developer 
                </Typography>
                <Typography variant="body2" className={style.bodyText}>
                  {/* Currently undergoing training in React Native as a frontend
                  developer, I am excited to broaden my skill set and venture
                  into mobile app development. React Native presents an exciting
                  opportunity to leverage my existing knowledge in React and
                  JavaScript to build robust and cross-platform mobile
                  applications. Through comprehensive training programs and
                  practical hands-on experience, I am honing my skills in
                  creating engaging user interfaces, integrating with native
                  device features, and optimizing performance for mobile
                  devices. I am passionate about embracing new technologies and
                  constantly seeking opportunities to enhance my proficiency in
                  React Native development. With a dedicated focus on learning
                  and growth, I am excited to embark on this journey into mobile
                  app development and contribute to the creation of innovative
                  and impactful mobile experiences. */}
                  At SuperTech Limited, I played a key role in frontend
                  development, building scalable and modern web applications.
                  Using React and Next.js, I developed robust UI architectures
                  that balanced aesthetics with functionality. My work involved
                  designing elegant layouts, refining user navigation, and
                  implementing state management solutions to enhance application
                  interactivity. I collaborated closely with backend developers
                  to streamline API integrations and optimize data flow,
                  ensuring a smooth user experience. Staying updated with the
                  latest technologies, I explored CSS preprocessors like Sass
                  and component-driven design principles to maintain consistency
                  across projects. While focusing on frontend development, I
                  also began exploring backend technologies, particularly using
                  Java. I'm currently learning backend fundamentals, including
                  API development, database management, and server-side logic.
                  This knowledge allows me to work more efficiently with
                  full-stack applications, bridging the gap between frontend and
                  backend for seamless integration.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_me;
