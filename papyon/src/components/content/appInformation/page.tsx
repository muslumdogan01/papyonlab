"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AppInformation = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex w-full justify-center items-center mb-32">
        <div className="relative rounded-[50px] ">
          <motion.div
            initial={{ borderColor: "rgba(0, 209, 255, 0.9)" }} 
            animate={{ borderColor: "rgba(0, 209, 255, 0)" }}
            transition={{
              duration: 2, // Animasyon süresi
              repeat: Infinity, // Sonsuz tekrar
              repeatType: "reverse", // Ters yönde tekrar
            }}
            style={{
              
              borderStyle: "solid",
              borderTopColor: "2px",
              borderRightColor: "1px",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
            }}
          >
            <Image
              src="/appInformation.svg"
              alt="Logo"
              width={1200}
              height={500}
              className=" bg-gradient-to-b  rounded-[50px]  from-[#21C1F333] to-[#00030F00] -z-10"
            />
          </motion.div>

          <div className="group ">
            <Image
              src="/playStore.svg"
              alt="playStore"
              width={120}
              height={120}
              className="absolute top-[75px] -rotate-[15deg] left-20 group-hover:-rotate-[-15deg] transition duration-1000 ease-linear"
            />
            <Image
              src="/appleStore.svg"
              alt="playStore"
              width={120}
              height={120}
              className="absolute top-[120px] -rotate-[-15deg] left-[171px] group-hover:-rotate-[15deg]  transition duration-1000 ease-linear"
            />
          </div>

          <div className="absolute md:left-[100px] top-[170px] md:right-[58px] flex md:flex-row flex-col">
            <div className="flex w-full flex-col lg:flex-row">
              <div className="flex flex-col w-full lg:w-1/2">
                <h1 className="text-[40px] w-full bg-clip-text mt-10 px-6 bg-gradient-to-r from-[#C583D4] to-[#96B8F8] text-transparent font-semibold leading-[49px] tracking-[-3px] text-center md:text-left">
                  Our mobile new world. We do fun things in this world
                </h1>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 mt-7 md:mt-0">
                <span className="font-normal  w-full lg:text-xl lg:leading-[34px] px-6 bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#C2C2C2] text-transparent text-center md:text-left">
                  At Papyonlab, we leave our mark on the digital world by
                  creating mobile applications that make a difference. Our
                  applications, available on the App Store and Play Store, stand
                  out with the innovative blend of our creative team s ingenuity
                  and hard work.
                  <br />
                  <br />
                  The applications we ve developed have been embraced by users
                  in many countries, providing us with the opportunity to make a
                  global impact. We started with a startup spirit, but our goal
                  is to grow and surpass boundaries.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInformation;
