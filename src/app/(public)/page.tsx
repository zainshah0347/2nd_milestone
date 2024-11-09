// 'use client'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { experienceData, awardsData, skillsData } from "./about/aboutData";
// import Image from "next/image";
// import Link from "next/link";
// import AOS from "aos";
// import 'aos/dist/aos.css';

// import { useEffect } from 'react';

// export default function Home() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   }

//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Time duration for animations
//       once: true, // Animation will only happen once
//     });
//   }, []);

//   const contactFollowMeList = [
//     { li: "Facebook" },
//     { li: "Twitter" },
//     { li: "Instagram" },
//     { li: "Dribble" },
//     { li: "Hostinger" },
//   ];

//   const contactMeList = [
//     { email: "zain@gmail.com", phoneNumber: "+123 456 789" }
//   ];

//   const projectsImages = [
//     {
//       project1Url: "/images/project1.jpg",
//       project2Url: "/images/project2.jpg",
//     },
//     {
//       project1Url: "/images/project3.jpg",
//       project2Url: "/images/project4.jpg",
//     },
//     {
//       project1Url: "/images/project5.jpg",
//       project2Url: "/images/project6.jpg",
//     },
//   ];


//   const skills = [
//     {
//       url1: "/images/html.png",
//       title1: "HTML",
//       url2: "/images/css.png",
//       title2: "CSS",
//     }, {
//       url1: "/images/javascript.png",
//       title1: "JAVASCRIPT",
//       url2: "/images/typescript.png",
//       title2: "TYPESCRIPT",
//     }, {
//       url1: "/images/tailwind.png",
//       title1: "TAILWIND",
//       url2: "/images/react.png",
//       title2: "REACT",
//     }, {
//       url1: "/images/nextjs.png",
//       title1: "NEXT JS",
//       url2: "/images/nextjs.png",
//       title2: "NEXT JS",

//     },
//   ]

//   return (
//     <div>
//       <div className="w-full h-full flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 bg-[#ECEEEC] flex justify-center md:justify-end p-6 md:pr-10 md:items-end md:pb-24">
//           <div className="space-y-10 md:space-y-20 pt-44">
//             <div>
//               <span className="text-[#CA3F1D] text-sm md:text-[20px] font-semibold font-sans tracking-widest">
//                 HELLO
//               </span>
//               <h1 className="text-3xl md:text-6xl font-serif">
//                 I'm Muhammad Zain <br />
//                 a Junior Web Developer <br />
//                 based in Somewhere.
//               </h1>
//             </div>
//             <div className="mt-5 flex gap-4 flex-wrap">
//               <Link href="#about">
//                 <button
//                   className="py-3 px-5 md:py-[18px] md:px-6 border-2 bg-[#141414] font-sans text-white tracking-widest text-sm md:text-base transition-all duration-300 hover:bg-[#CA3F1D] hover:scale-105"
//                   aria-label="More About Me"
//                 >
//                   MORE ABOUT ME
//                 </button>
//               </Link>
//               <button
//                 className="px-5 py-3 md:px-6 md:py-4 border-2 border-black font-sans tracking-widest text-sm md:text-base transition-all duration-300 hover:bg-[#CA3F1D] hover:text-white hover:scale-105"
//                 aria-label="Get in Touch"
//               >
//                 GET IN TOUCH
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="relative w-full md:w-1/2 h-64 md:h-auto">
//           <Image
//             src="/images/profile.jpg"
//             layout="fill"
//             objectFit="cover"
//             alt="Profile picture of Muhammad Zain, Web Developer"
//             className="w-[700px] h-[700px] object-cover"
//           />
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="bg-[#FBFCFB] px-6 md:px-20">
//         <div className="pt-10 md:pt-[224px]" id="about">
//           <h1 className="font-serif text-4xl md:text-[50px] text-center text-[#211A1A]">About Me.</h1>
//           <div className="flex flex-col gap-6 md:gap-10 mt-10 md:mt-20">
//             <p className="text-lg md:text-[24px] tracking-wider leading-relaxed text-[#1A253E]">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo id debitis cupiditate cumque, error quia! Debitis cupiditate ipsa nihil labore, earum atque dolor quos saepe vero inventore, odit nam deleniti accusantium omnis mollitia consequatur harum incidunt! Ex modi aut repudiandae doloremque commodi recusandae labore sit. Perspiciatis omnis dolor dolores fuga iusto, recusandae animi nisi consequuntur exercitationem id maxime earum pariatur voluptas! Porro non quos quae tempora fuga quis sequi minus sed sint debitis reiciendis, nostrum natus suscipit iusto odio.
//             </p>
//             <p className="text-lg md:text-[24px] tracking-wider text-[#1A253E] leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row md:justify-between mt-10 md:mt-20 gap-10 md:gap-0">
//           {/* Experience Section */}
//           <div className="w-full md:w-1/3">
//             <h1 className="border-l-4 border-[#C93F1D] pl-3 text-2xl md:text-3xl font-serif mb-6 md:mb-[32px] text-[#211A1A]">
//               Experience
//             </h1>
//             {experienceData.map((items, index) => {
//               const { h3, p } = items;
//               return (
//                 <div key={index} className="mb-5">
//                   <h3 className="text-lg md:text-[21px] text-[#211A1A] font-semibold">
//                     {h3}
//                   </h3>
//                   <p className="text-sm md:text-[17px] text-[#7E7D7C]">{p}</p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Awards Section */}
//           {/* <div className="w-full md:w-1/3">
//             <h1 className="border-l-4 border-[#C93F1D] pl-3 text-2xl md:text-3xl font-serif mb-6 md:mb-[32px] text-[#211A1A]">
//               Awards
//             </h1>
//             {awardsData.map((items, index) => {
//               const { h3, p } = items;
//               return (
//                 <div key={index} className="mb-5">
//                   <h3 className="text-lg md:text-[21px] text-[#211A1A] font-semibold">
//                     {h3}
//                   </h3>
//                   <p className="text-sm md:text-[17px] text-[#7E7D7C]">{p}</p>
//                 </div>
//               );
//             })}
//           </div> */}

//           {/* Skills Section */}
//           <div className="w-full md:w-1/3">
//             <h1 className="border-l-4 border-[#C93F1D] pl-3 text-2xl md:text-3xl font-serif mb-6 md:mb-[32px] text-[#211A1A]">
//               Skills
//             </h1>
//             {skillsData.map((items, index) => {
//               const { h3 } = items;
//               return (
//                 <div key={index} className="mb-5">
//                   <h3 className="text-lg md:text-[21px] text-[#211A1A] font-semibold">
//                     {h3}
//                   </h3>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <div className="mt-16 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//   {skills.map((items, index) => {
//     const { url1, url2, title1, title2 } = items;
//     return (
//       <div className="flex justify-center items-center gap-8 flex-wrap w-96" key={index}>
//         <div 
//           data-aos="fade-up"
//           className="w-[200px] h-[200px] relative rounded-lg shadow-lg overflow-hidden"
//         >
//           <Image
//             src={url1}
//             alt={title1}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//           <h2 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded">
//             {title1}
//           </h2>
//         </div>

//         <div
//           data-aos="fade-up"
//           data-aos-delay="100"
//           className="w-[200px] h-[200px] relative rounded-lg shadow-lg overflow-hidden"
//         >
//           <Image
//             src={url2}
//             alt={title2}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//           <h2 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded">
//             {title2}
//           </h2>
//         </div>
//       </div>
//     );
//   })}
// </div>




//       {/* Works Section */}
//       <div>
//         <div className="bg-[#FBFCFB] px-6 md:px-20">
//           <div className="mb-28 pt-[224px]" id="projects">
//             <h1 className="font-serif text-4xl md:text-[50px] ml-8 text-[#211A1A]">Projects.</h1>
//             <div className="mt-16 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//               {projectsImages.map((items, index) => {
//                 const { project1Url, project2Url } = items;
//                 return (
//                   <div className="flex justify-center items-center gap-8 flex-wrap" key={index}>
//                     <div
//                       data-aos="fade-up"
//                       className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-lg shadow-lg"
//                     >
//                       <Image
//                         src={project1Url}
//                         alt="Project 1"
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-lg"
//                       />
//                     </div>
//                     <div
//                       data-aos="fade-up"
//                       data-aos-delay="100"
//                       className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-lg shadow-lg"
//                     >
//                       <Image
//                         src={project2Url}
//                         alt="Project 2"
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-lg"
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="bg-[#1A1A1A] px-6 md:px-20 pt-20">
//         <div className="flex flex-col" id="contact">
//           <h1 className="font-serif text-4xl md:text-[50px] text-white pb-10 md:pb-24 text-center">Get In Touch.</h1>
//           <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
//             {/* Left Column */}
//             <div className="w-full md:w-1/2 gap-8 flex flex-col">
//               <p className="text-[#767776] text-[18px] md:text-[25px] tracking-wider">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla voluptatibus soluta consequatur nam repellat
//                 nihil est similique. Perferendis saepe iure, libero quod aliquid exercitationem vero quaerat eos non blanditiis
//                 similique placeat reprehenderit nihil iste, alias enim voluptatibus? Quo, natus.
//               </p>
//               <button className="px-10 md:px-36 bg-[#C93F1D] w-full text-[16px] font-medium text-white py-5 tracking-widest transition-all duration-300 hover:bg-[#B3321D]">
//                 MESSAGE ME
//               </button>
//             </div>

//             {/* Right Column */}
//             <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-10">
//               <div className="flex flex-col gap-8 md:gap-10 md:flex-row">
//                 {/* Follow Me Section */}
//                 <div className="w-full md:w-1/2">
//                   <h3 className="font-serif text-[20px] md:text-[24px] font-normal text-white">Follow Me</h3>
//                   {contactFollowMeList.map((items, index) => {
//                     const { li } = items;
//                     return (
//                       <ul key={index} className="mt-3">
//                         <li className="text-[#767776] text-[16px] md:text-[20px]">{li}</li>
//                       </ul>
//                     );
//                   })}
//                 </div>

//                 {/* Contact Me Section */}
//                 {contactMeList.map((items, index) => {
//                   const { email, phoneNumber } = items;
//                   return (
//                     <div key={index} className="w-full md:w-1/2">
//                       <h3 className="font-serif text-[20px] md:text-[24px] font-normal text-white">Contact Me</h3>
//                       <ul>
//                         <li className="text-[#767776] text-[16px] md:text-[20px] mt-3">{email}</li>
//                         <li className="text-[#767776] text-[16px] md:text-[20px] mt-3">{phoneNumber}</li>
//                       </ul>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div>
//                 <button className="px-10 md:px-36 border-2 border-white w-full text-[16px] font-medium text-white py-5 tracking-widest transition-all duration-300 hover:bg-[#CA3F1D]">
//                   GET MY CV
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll to Top Button */}
//         <div className="flex flex-col justify-center items-center mt-10">
//           <button onClick={scrollToTop}>
//             <KeyboardArrowUpIcon className="text-6xl text-white cursor-pointer transition-all duration-500 hover:scale-110" />
//           </button>

//         </div>
//         <hr className="mt-10" />
//       </div>
//     </div>
//   );
// }



'use client'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { experienceData, awardsData, skillsData } from "./about/aboutData";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import React from 'react';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const contactFollowMeList = [
    { li: "Facebook" },
    { li: "Twitter" },
    { li: "Instagram" },
    { li: "Dribble" },
    { li: "Hostinger" },
  ];

  const contactMeList = [
    { email: "zain@gmail.com", phoneNumber: "+123 456 789" }
  ];

  const projectsImages = [
    { project1Url: "/images/project1.jpg", project2Url: "/images/project2.jpg" },
    { project1Url: "/images/project3.jpg", project2Url: "/images/project4.jpg" },
    { project1Url: "/images/project5.jpg", project2Url: '/images/project6.jpg' },
  ];

  const skills = [
    { url1: "/images/html.png", title1: "HTML", url2: "/images/css.png", title2: "CSS" },
    { url1: "/images/javascript.png", title1: "JAVASCRIPT", url2: "/images/typescript.png", title2: "TYPESCRIPT" },
    { url1: "/images/tailwind.png", title1: "TAILWIND", url2: "/images/react.png", title2: "REACT" },
    { url1: "/images/nextjs.png", title1: "NEXT JS", url2: "/images/nextjs.png", title2: "NEXT JS" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#ECEEEC] flex justify-center md:justify-end p-6 md:pr-10 md:items-end md:pb-24">
          <div className="space-y-6 md:space-y-10 pt-24 md:pt-44">
            <div>
              <span className="text-[#CA3F1D] text-sm md:text-[20px] font-semibold tracking-widest">
                HELLO
              </span>
              <h1 className="text-3xl md:text-6xl font-serif">
                I'm Muhammad Zain <br />
                a Junior Web Developer <br />
                based in Somewhere.
              </h1>
            </div>
            <div className="mt-5 flex gap-4 flex-wrap">
              <Link href="#about">
                <button className="py-3 px-5 md:py-4 md:px-6 border-2 bg-[#141414] font-sans text-white text-sm md:text-base transition-all duration-300 hover:bg-[#CA3F1D] hover:scale-105">
                  MORE ABOUT ME
                </button>
              </Link>
              <button className="px-5 py-3 md:px-6 md:py-4 border-2 border-black font-sans text-sm md:text-base transition-all duration-300 hover:bg-[#CA3F1D] hover:text-white hover:scale-105">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/images/profile.jpg"
            layout="fill"
            objectFit="cover"
            alt="Profile picture of Muhammad Zain, Web Developer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#FBFCFB] px-6 md:px-20">
        <div className="pt-10 md:pt-[224px]" id="about">
          <h1 className="font-serif text-4xl md:text-[50px] text-[#211A1A]">About Me.</h1>
          <div className="flex flex-col gap-6 md:gap-10 mt-10 md:mt-20">
            <p className="text-lg md:text-[24px] tracking-wider leading-relaxed text-[#1A253E]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo id debitis cupiditate cumque, error quia! Debitis cupiditate ipsa nihil labore, earum atque dolor quos saepe vero inventore, odit nam deleniti accusantium omnis mollitia consequatur harum incidunt! Ex modi aut repudiandae doloremque commodi recusandae labore sit. Perspiciatis omnis dolor dolores fuga iusto, recusandae animi nisi consequuntur exercitationem id maxime earum pariatur voluptas! Porro non quos quae tempora fuga quis sequi minus sed sint debitis reiciendis, nostrum natus suscipit iusto odio.
            </p>
            <p className="text-lg md:text-[24px] tracking-wider text-[#1A253E] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim.
            </p>
          </div>
        </div>


           {/* Skills Icons Section */}
      {<div className="mt-16 md:mt-28 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-20">
        {skills.map((items, index) => {
          const { url1, url2, title1, title2 } = items;
          return (
            <div className="flex justify-center items-center gap-8 flex-wrap" key={index}>
              <div className="w-[150px] h-[150px] relative rounded-lg shadow-lg overflow-hidden">
                <Image src={url1} alt={title1} layout="fill" objectFit="cover" className="rounded-lg" />
                <h2 className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">{title1}</h2>
              </div>
              <div className="w-[150px] h-[150px] relative rounded-lg shadow-lg overflow-hidden">
                <Image src={url2} alt={title2} layout="fill" objectFit="cover" className="rounded-lg" />
                <h2 className="absolute bottom-2 left-2 text-white bg-black px-2 py-1 rounded">{title2}</h2>
              </div>
            </div>
          );
        })}
      </div>}

        {/* Experience, Skills Section */}
        {/* <div className="flex flex-col md:flex-row md:justify-between mt-10 md:mt-20 gap-10 md:gap-0"> */}
          {/* Experience Section */}
          {/* <div className="w-full md:w-1/3">
            <h1 className="border-l-4 border-[#C93F1D] pl-3 text-2xl md:text-3xl font-serif mb-6 text-[#211A1A]">
              Experience
            </h1>
            {experienceData.map((items, index) => {
              const { h3, p } = items;
              return (
                <div key={index} className="mb-5">
                  <h3 className="text-lg md:text-[21px] font-semibold text-[#211A1A]">
                    {h3}
                  </h3>
                  <p className="text-sm md:text-[17px] text-[#7E7D7C]">{p}</p>
                </div>
              );
            })}
          </div> */}

          {/* Skills Section */}
          {/* <div className="w-full md:w-1/3">
            <h1 className="border-l-4 border-[#C93F1D] pl-3 text-2xl md:text-3xl font-serif mb-6 text-[#211A1A]">
              Skills
            </h1>
            {skillsData.map((items, index) => {
              const { h3 } = items;
              return (
                <div key={index} className="mb-5">
                  <h3 className="text-lg md:text-[21px] font-semibold text-[#211A1A]">
                    {h3}
                  </h3>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>

   


      {/* Works Section */}
      <div>
        <div className="bg-[#FBFCFB] px-6 md:px-20">
          <div className="mb-28 pt-[224px]" id="projects">
            <h1 className="font-serif text-4xl md:text-[50px] ml-8 text-[#211A1A]">Projects.</h1>

            <div className="mt-16 md:mt-28 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projectsImages.map((items, index) => {
                const { project1Url, project2Url } = items;
                return (
                  <React.Fragment key={index}>
                    {/* Project 1 Image */}
                    <div
                      data-aos="fade-up"
                      className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-lg shadow-lg"
                    >
                      <Image
                        src={project1Url}
                        alt="Project 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>

                    {/* Project 2 Image */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-lg shadow-lg"
                    >
                      <Image
                        src={project2Url}
                        alt="Project 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] px-6 md:px-20 pt-20">
        <div className="flex flex-col" id="contact">
          <h1 className="font-serif text-4xl md:text-[50px] text-white pb-10 md:pb-24 text-center">Get In Touch.</h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
            {/* Left Column */}
            <div className="w-full md:w-1/2 gap-8 flex flex-col">
              <p className="text-[#767776] text-[18px] md:text-[25px] tracking-wider">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla voluptatibus soluta consequatur nam repellat
                nihil est similique. Perferendis saepe iure, libero quod aliquid exercitationem vero quaerat eos non blanditiis
                similique placeat reprehenderit nihil iste, alias enim voluptatibus? Quo, natus.
              </p>
              <button className="px-10 md:px-36 bg-[#C93F1D] w-full text-[16px] font-medium text-white py-5 tracking-widest transition-all duration-300 hover:bg-[#B3321D]">
                MESSAGE ME
              </button>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-8 md:gap-10 md:flex-row">
                {/* Follow Me Section */}
                <div className="w-full md:w-1/2">
                  <h3 className="font-serif text-[20px] md:text-[24px] font-normal text-white">Follow Me</h3>
                  {contactFollowMeList.map((items, index) => {
                    const { li } = items;
                    return (
                      <ul key={index} className="mt-3">
                        <li className="text-[#767776] text-[16px] md:text-[20px]">{li}</li>
                      </ul>
                    );
                  })}
                </div>

                {/* Contact Me Section */}
                {contactMeList.map((items, index) => {
                  const { email, phoneNumber } = items;
                  return (
                    <div key={index} className="w-full md:w-1/2">
                      <h3 className="font-serif text-[20px] md:text-[24px] font-normal text-white">Contact Me</h3>
                      <ul>
                        <li className="text-[#767776] text-[16px] md:text-[20px] mt-3">{email}</li>
                        <li className="text-[#767776] text-[16px] md:text-[20px] mt-3">{phoneNumber}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div>
                <button className="px-10 md:px-36 border-2 border-white w-full text-[16px] font-medium text-white py-5 tracking-widest transition-all duration-300 hover:bg-[#CA3F1D]">
                  GET MY CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-[#CA3F1D] text-white p-3 md:p-4 rounded-full shadow-lg focus:outline-none transition-transform duration-300 hover:scale-110"
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </button>








    </div>
  )
}
