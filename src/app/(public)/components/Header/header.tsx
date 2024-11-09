// 'use client'
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Link from "next/link";
// import RightDrawer from "../drawer";
// import React from 'react';

// export default function Header() {

//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen: boolean) => () => {
//     console.log('hello world')
//     setOpen(newOpen);
//   };

//   return (
//     <div id="top">
//       {/* Header Section */}
//       <div className="bg-[#1A1A1A] py-5 px-8 md:px-14 fixed w-full z-50 shadow-lg">
//         {/* Logo */}
//         <div className="flex items-center justify-between">
//           <h1 className="text-white text-3xl font-bold cursor-pointer">
//             Zain.
//           </h1>
//           <RightDrawer open={open} toggleDrawer={toggleDrawer} />
//           <Button onClick={toggleDrawer(true)} className='text-white'>
//             <MenuIcon />
//           </Button>

//           {/* Navigation Links */}
//           <ul className="flex items-center gap-10 text-white text-lg justify-end">
//             {/* Intro link (Home) */}
//             <Link href="#top">
//               <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Intro</li>
//             </Link>
//             {/* About Us link */}
//             <Link href="#about">
//               <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">About Us</li>
//             </Link>
//             {/* Projects link */}
//             <Link href="#projects">
//               <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Projects</li>
//             </Link>
//             {/* Contact Us link */}
//             <Link href="#contact">
//               <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Contact Us</li>
//             </Link>
//           </ul>
//         </div>
//       </div>

//       {/* Smooth Scroll */}
//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client'
import MenuIcon from '@mui/icons-material/Menu';
// import RightDrawer from '../components/RightDrawer'; // adjust path as needed
import Button from '@mui/material/Button';
import Link from "next/link";
import RightDrawer from "../drawer"; // Ensure RightDrawer is set up to accept children content
import React from 'react';

export default function Header() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div id="top">
      {/* Header Section */}
      <div className="bg-[#1A1A1A] py-5 px-8 md:px-14 fixed w-full z-50 shadow-lg">
        {/* Logo and Toggle Drawer Button */}
        <div className="flex items-center justify-between">
          <h1 className="text-white text-3xl font-bold cursor-pointer">
            Zain.
          </h1>

          {/* Drawer for Small Screens with Navigation Links */}
          <RightDrawer open={open} toggleDrawer={toggleDrawer}>
            <ul className="flex flex-col items-start gap-6 p-6 text-lg text-black">
              <Link href="#top" onClick={toggleDrawer(false)}>
                <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Intro</li>
              </Link>
              <Link href="#about" onClick={toggleDrawer(false)}>
                <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">About Us</li>
              </Link>
              <Link href="#projects" onClick={toggleDrawer(false)}>
                <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Projects</li>
              </Link>
              <Link href="#contact" onClick={toggleDrawer(false)}>
                <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Contact Us</li>
              </Link>
            </ul>
          </RightDrawer>

          {/* Show the MenuIcon Button only on small screens */}
          <Button onClick={toggleDrawer(true)} className="text-white md:hidden">
            <MenuIcon />
          </Button>

          {/* Navigation Links for Larger Screens */}
          <ul className="hidden md:flex items-center gap-10 text-white text-lg">
            <Link href="#top">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Intro</li>
            </Link>
            <Link href="#about">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">About Us</li>
            </Link>
            <Link href="#projects">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Projects</li>
            </Link>
            <Link href="#contact">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[#C93F1D]">Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Smooth Scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
