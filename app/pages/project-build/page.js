import React from 'react'

const Projects_build = () => {
  return (
    <div>
       <section className=" bg-[white] relative py-20 px-20 w-[100vw] " >
        <h1 id="services" className="text-center ">
          Services We Offer
        </h1>

        <div className="  w-[100%] grid gap-0 grid-cols-3 justify-center">
          <div className="w-[28vw] mb-6 shadow p-10 rounded-xl pl-4 ">
            <div className="flex items-center gap-4 mb-6 ">
              <FaGlobe size={62} color="#02007f" />{" "}
              <h2 className="text-2xl font-[700]">
                Web <br /> Development
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex gap-4 pl-4  items-center text-lg font-[200]">
                <FaNodeJs color="green" size={25} /> NodeJs
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <TbBrandNextjs color="black" size={25} /> NextJS{" "}
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <SiReact color="LIGHTBLUE" size={25} /> React{" "}
              </span>

              <button
                className="font-[100] text-lg flex justify-center items-center gap-5 bg-[#02007f]
          px-2 py-2 rounded-sm mt-4 w-[9em] text-[white]"
              >
                Read More <RiArrowRightLine />
              </button>
            </div>
          </div>

          <div className="w-[28vw] mb-6 shadow p-10 rounded-xl pl-4 ">
            <div className="flex items-center gap-4 mb-6 ">
              <FaMobileAlt size={62} color="#02007f" />{" "}
              <h2 className="text-2xl font-[700]">
                App <br /> Development
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex gap-4 pl-4  items-center text-lg font-[200]">
                <IoLogoAndroid color="green" size={25} /> Android App{" "}
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <IoLogoApple color="black" size={25} /> IOS App{" "}
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <SiReact color="LIGHTBLUE" size={25} /> React Native{" "}
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <SiFlutter color="LIGHTBLUE" size={25} /> Flutter{" "}
              </span>


              <button
                className="font-[100] text-lg flex justify-center items-center gap-5 bg-[#02007f]
          px-2 py-2 rounded-sm mt-4 w-[9em] text-[white]"
              >
                Read More <RiArrowRightLine />
              </button>
            </div>
          </div>

          <div className="w-[28vw] mb-6 shadow p-10 rounded-xl pl-4 ">
            <div className="flex items-center gap-4 mb-6 ">
              <GiTeacher size={62} color="#02007f" />{" "}
              <h2 className="text-2xl font-[700]">
               TECH <br /> Training
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex gap-4 pl-4  items-center text-lg font-[200]">
                <CgWebsite  color="green" size={25} /> Web Development{" "}
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <FaFileCode  color="black" size={25} /> Frontend Development {" "}
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <TbShieldCode color="LIGHTBLUE" size={25} /> Backend Development
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                <IoLogoDesignernews  color="LIGHTBLUE" size={25} /> Graphic Designing
              </span>

              <span className="flex gap-4 pl-4 items-center text-lg font-[200]">
                {" "}
                <CiMobile2  color="LIGHTBLUE" size={25} />
              Mobile App Development
              </span>

              <button
                className="font-[100] text-lg flex justify-center items-center gap-5 bg-[#02007f]
          px-2 py-2 rounded-sm mt-4 w-[9em] text-[white]"
              >
                Read More <RiArrowRightLine />
              </button>
            </div>
          </div>
    </div>
    </section>
    </div>
  )
}

export default Projects_build;