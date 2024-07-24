import React, { useState } from 'react';
import logo from '../photo/logo.png'; 
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const headItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Academics' },
    { id: 4, text: 'Admissions' },
    { id: 5, text: 'Faculty' },
    { id: 6, text: 'Students' },
    { id: 7, text: 'Gallery' },
    { id: 8, text: 'Contact' },
  ];

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} className="w-12 h-12 rounded-full" alt="School Logo" />
            <div>
              <h1 className="text-xl font-bold cursor-pointer">
                Springdale <span className="text-cyan-400">Public School</span>
              </h1>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {headItems.map(({ id, text }) => (
              <li key={id} className="list-none">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
                >
                  {text}
                </Link>
              </li>
            ))}
          </div>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {!menu ? (
              <GiHamburgerMenu size={24} className="cursor-pointer" />
            ) : (
              <IoMdClose size={24} className="cursor-pointer" />
            )}
          </div>
        </div>
        {menu && (
          <div className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {headItems.map(({ id, text }) => (
              <li key={id} className="list-none my-4">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="cursor-pointer text-xl hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setMenu(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
