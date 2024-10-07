import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import navbarElements from "./elements";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation('navbar'); // Specify the namespace

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-primary-bg flex justify-between items-center mx-auto py-4 px-4 md:px-16 text-primary-text'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold'>Boat Rent</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navbarElements.map(item => (
          <Link
            to={item.link}
            key={item.name}
            className='w-max p-4 font-bold rounded-xl m-2 cursor-pointer duration-300 text-primary-text hover:text-gray-400'
          >
            {t(item.name)}
          </Link>
        ))}
        <LanguageSwitcher />
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-white bg-primary-bg ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold m-4 text-primary-text'>Boat Rent</h1>

        {/* Mobile Navigation Items */}
        {navbarElements.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl duration-300 cursor-pointer border-white text-primary-text'
          >
            {t(item.name)}
          </li>
        ))}
        <span class="flex justify-center"><LanguageSwitcher /></span>
      </ul>
    </div>                                          
 );
}



export default Navbar;
