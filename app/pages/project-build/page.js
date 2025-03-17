"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GoldSuit1 from "../../../public/360goldsuit.png";
import GoldSuit2 from "../../../public/360goldsuit2.png";
import Botech3601 from "../../../public/360botech.png";
import Botech3602 from "../../../public/360botech2.png";
import Akey1 from "../../../public/aky.png";
import Akey2 from "../../../public/aky2.png";
import Becoming1 from "../../../public/bc.png";
import Becoming2 from "../../../public/bc2.png";
import Imperial from "../../../public/imp.png";
import Imperial2 from "../../../public/imp2.png";

const Projects_build = () => {
  return (
    <div className="w-full px-32 py-14">
      <h1 id="services" className="text-center ">
        Recent Projects
      </h1>

      <div className="w-full grid gap-8 grid-cols-2">
        <div className="w-full mb-6 border-[ #69fab4] shadow p-10 rounded-xl px-4 flex flex-col items-start justify-between ">
          <div className="w-full mb-2 rounded-xl">
            <Swiper
              // breakpoints={{
              //   480: { slidesPerView: 1, spaceBetween: 10 },
              //   800: { slidesPerView: 3, spaceBetween: 15 },
              //   1300: { slidesPerView: 1, spaceBetween: 10 },
              // }}
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              autoplay={{
                delay: 6000, // 3 seconds delay
                disableOnInteraction: false, // Keeps autoplay even when user interacts
              }}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={GoldSuit1}
                    alt="Gold Suit Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={GoldSuit2}
                    alt="Gold Suit Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full flex flex-col gap-2 text-sm">
            <h4>Type: Web Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS</h4>
            <Link
              href={"https://www.360goldsuit.com/"}
              className="text-amber-500"
            >
              visit Link
            </Link>
            <div>
              Developing the 360GOLDSUITE platform was a transformative
              experience that pushed my frontend expertise to new heights.
              Leveraging Next.js, Tailwind CSS, and JavaScript, I crafted a
              seamless, responsive, and visually appealing interface that
              enhanced user interactions. The project aimed to revolutionize the
              gold-buying industry by providing a paperless, intuitive platform
              for managing transactions and accurately calculating gold values.
              I focused on designing scalable UI components, optimizing
              performance through lazy loading and code-splitting, and ensuring
              a smooth user experience across all devices. Collaborating closely
              with designers and backend developers, I streamlined API
              integrations and enhanced accessibility. The challenges I tackled
              throughout the development process strengthened my problem-solving
              skills and attention to detail. This project not only added a
              significant achievement to my portfolio but also deepened my
              passion for creating impactful, user-centric web applications that
              drive innovation.
            </div>
          </div>
        </div>

        <div className="w-full mb-6  shadow p-10 rounded-xl pl-4 flex flex-col items-start justify-between  ">
          <div className="w-full mb-2 rounded-xl">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              autoplay={{
                delay: 6000, // 3 seconds delay
                disableOnInteraction: false, // Keeps autoplay even when user interacts
              }}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Imperial}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Imperial2}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h4>Type: Desktop Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS, Rust,tauri</h4>
            <div>
              The Imperial Lodge Management System is a powerful desktop
              application designed to optimize guest house operations. Built
              with Rust for high performance, Tailwind CSS for a modern and
              responsive interface, MongoDB for reliable data storage, and
              Node.js for backend functionality, it seamlessly integrates with
              Tauri to combine web technologies with native desktop
              capabilities. This system enables efficient management of guest
              reservations, billing, and overall operations, ensuring security
              and ease of use. Developing this project strengthened my
              full-stack development skills, particularly in building
              high-performing and user-friendly desktop applications. It
              showcases my ability to implement cutting-edge technologies in
              practical, real-world solutions.
            </div>
          </div>
        </div>

        <div className="w-full mb-6  shadow p-10 rounded-xl pl-4 flex flex-col items-start justify-between  ">
          <div className="w-full mb-2 rounded-xl">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              autoplay={{
                delay: 6000, // 3 seconds delay
                disableOnInteraction: false, // Keeps autoplay even when user interacts
              }}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Botech3601}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Botech3602}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h4>Type: Web Application</h4>
            <h4>Technologies: Nextjs,SASS,vercel</h4>
            <Link
              href={"https://www.360botech.com/"}
              className="text-amber-500"
            >
              visit Link
            </Link>
            <div>
              Developing the website at Botech Development was a transformative
              experience in my career. It allowed me to refine my skills in
              Next.js, Sass, and Vercel, ensuring a seamless user interface
              while efficiently managing project timelines. Engaging with both
              the team and clients enhanced my ability to collaborate
              effectively and communicate complex ideas with clarity. Navigating
              technical hurdles sharpened my problem-solving skills, reinforcing
              my adaptability in high-pressure situations. This experience
              played a crucial role in my professional development,
              strengthening my portfolio and instilling confidence in my ability
              to tackle future challenges.
            </div>
          </div>
        </div>

        <div className="w-full mb-6  shadow p-10 rounded-xl pl-4 flex flex-col items-start justify-between  ">
          <div className="w-full mb-2 rounded-xl">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              autoplay={{
                delay: 6000, // 3 seconds delay
                disableOnInteraction: false, // Keeps autoplay even when user interacts
              }}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Akey1}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Akey2}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h4>Type: Desktop Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS, Rust,tauri</h4>
            <div>
              The Akyer3 Group of Companies Management System is a powerful
              desktop application designed to streamline operations across
              multiple departments within the organization. Developed with Rust
              for superior performance, Tailwind CSS for a sleek and responsive
              interface, MongoDB for efficient data management, and Tauri to
              integrate web technologies into a desktop environment, this system
              offers a seamless solution for managing complex business
              processes. Working on this project enhanced my expertise in
              full-stack development, particularly in building scalable,
              high-performing, and user-friendly desktop applications tailored
              to specific business requirements.
            </div>
          </div>
        </div>

        <div className="w-full mb-6  shadow p-10 rounded-xl pl-4 flex flex-col items-start justify-between  ">
          <div className="w-full mb-2 rounded-xl">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              autoplay={{
                delay: 6000, // 3 seconds delay
                disableOnInteraction: false, // Keeps autoplay even when user interacts
              }}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Becoming1}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Becoming2}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h4>Type: Desktop Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS, Rust,tauri</h4>
            <div>
              Developing the website for Becoming Creation Limited was a
              rewarding and transformative experience. I deepened my expertise
              in Next.js, Sass, and Vercel while designing an engaging and
              user-friendly interface. Successfully managing project timelines
              and meeting key milestones reinforced my ability to work
              efficiently under pressure. Collaborating closely with the team
              and stakeholders refined my communication and teamwork skills,
              ensuring smooth execution. Tackling technical challenges pushed me
              to think critically and adapt quickly. This project not only
              strengthened my professional skill set but also fueled my passion
              for crafting innovative digital experiences.
            </div>
          </div>
        </div>

        <div className="w-full mb-6  shadow p-10 rounded-xl pl-4 flex flex-col items-start justify-between  ">
          <div className="w-full mb-2 rounded-xl">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              autoplay={{
                delay: 6000, // 3 seconds delay
                disableOnInteraction: false, // Keeps autoplay even when user interacts
              }}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Akey1}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <Image
                    src={Akey2}
                    alt="Imperial Image 1"
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h4>Type: Desktop Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS, Rust,tauri</h4>
            <div>
              Working on Becoming Care Services marked a significant milestone
              as my first industry project. It was an invaluable learning
              experience that refined my skills in Next.js, Sass, and Vercel,
              allowing me to create a seamless and intuitive user interface
              while meeting project deadlines with precision. Collaborating with
              the team and clients strengthened my communication and teamwork
              abilities, while tackling technical challenges sharpened my
              problem-solving skills. This project not only elevated my
              expertise but also instilled a deep sense of purpose in building
              impactful digital solutions, especially in the healthcare sector.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects_build;
