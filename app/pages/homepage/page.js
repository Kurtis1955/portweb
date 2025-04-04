import React from "react";
import { Typography, Button } from "antd";
// import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import PersonalImage from "../../../public/assets/profile.jpg";
import style from "../../../styles/pages/homepage.module.scss";

const HomePage = () => {
  return (
    <div className={style.mainContainer} id="homepage">
      <div className={style.personalContainer}>
        <Typography className="text-md text-[#12182b]">Hello! I&apos;m</Typography>
        <Typography className={style.nameBox}>THEOPHILUS AKOWUAH</Typography>
        <Typography className={style.skillBox}>
          A SOFTWARE <span style={{ color: "brown" }}> DEVELOPER </span>
        </Typography>
        <Typography className={style.nameBox}>
          {" "}
          MOBILE & <span style={{ color: "brown" }}>WEB</span> DEVELOPMENT
        </Typography>

        <div className={style.miniBox}>
          <span className={style.emptyBox1}></span>
          <span className={style.emptyBox2}></span>
          <span className={style.emptyBox3}></span>
        </div>

        <p className={style.detailBox}>
          I develop innovative solutions for WEB and MOBILE platforms, crafting
          seamless user experiences. Need an expert in this technological field?
          I&apos;m here to bring your ideas to life. Don&apos;t hesitate to reach out and
          let&apos;s build something amazing together! 🚀
        </p>
        <Button className={style.talk}>Let&apos;s Vibe</Button>
      </div>

      <div className={style.profileImageBox}>
        <Image className={style.profileImage} src={PersonalImage} alt="Profile Image" />
      </div>
    </div>
  );
};

export default HomePage;
