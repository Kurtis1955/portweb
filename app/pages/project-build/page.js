import React from "react";
import Image from "next/image";
import Link from "next/link";
import Botech360 from "../../../public/360goldsuit.png"
import Botech3602 from "../../../public/360goldsuit2.png"
// import Botech from "../../../public/"

const Projects_build = () => {
  return (
    <div className="w-full px-32 py-14 bg-amber-200">
      <h1 id="services" className="text-center ">
        Recent Projects
      </h1>

      <div className="w-full bg-amber-600 grid gap-8 grid-cols-2">
        <div className="w-full mb-6 shadow p-10 rounded-xl px-4 flex flex-col items-center justify-center ">
          <Image src={Botech360} alt="gold suit image" />
          <div className="w-full flex flex-col gap-2">
            <h4>Type: Web Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS</h4>
            <Link href={"/"}></Link>
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

        <div className="w-full mb-6 bg-red-600 shadow p-10 rounded-xl pl-4 ">
        <Image src={Botech3602} alt="gold suit image" />
          <div className="flex flex-col gap-2">
          <h4>Type: Web Application</h4>
            <h4>Technologies: Next.js, Tailwind CSS</h4>
            <Link href={"/"}></Link>
          </div>
        </div>

        <div className="w-full mb-6 bg-red-600 shadow p-10 rounded-xl pl-4 ">
          <div className="flex items-center gap-4 mb-6 ">
          
            <h2 className="text-2xl font-[700]">
              TECH <br /> Training
            </h2>
          </div>

          <div className="flex flex-col gap-2">

          </div>
        </div>
        <div className="w-full mb-6 bg-red-600 shadow p-10 rounded-xl pl-4 ">
          <div className="flex items-center gap-4 mb-6 ">
            <h2 className="text-2xl font-[700]">
              TECH <br /> Training
            </h2>
          </div>

          <div className="flex flex-col gap-2">
        
          </div>
        </div>
        <div className="w-full mb-6 bg-red-600 shadow p-10 rounded-xl pl-4 ">
          <div className="flex items-center gap-4 mb-6 ">
            <h2 className="text-2xl font-[700]">
              TECH <br /> Training
            </h2>
          </div>

          <div className="flex flex-col gap-2">

          </div>
        </div>
        <div className="w-full mb-6 bg-red-600 shadow p-10 rounded-xl pl-4 ">
          <div className="flex items-center gap-4 mb-6 ">

            <h2 className="text-2xl font-[700]">
              TECH <br /> Training
            </h2>
          </div>

          <div className="flex flex-col gap-2">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects_build;
