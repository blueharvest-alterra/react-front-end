import React, { useState, useEffect } from "react";
import LogoNavbar from "../../../assets/logo-navbar.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const linkClass = (sectionId) => {
    return activeSection === sectionId
      ? "block text-[#D9D9D9] border-b-4 border-blue-500 pb-2"
      : "block text-white hover:text-[#D9D9D9]";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'download', 'fitur', 'manfaat', 'testimoni'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 font-Poppins">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoNavbar} className="h-24" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            BlueHarvest
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-bold text-xl flex gap-9 md:p-0 mt-4 rounded-lg">
            <li>
              <a href="#" className={linkClass('home')} onClick={() => scrollToSection('home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={linkClass('download')} onClick={() => scrollToSection('download')}>
                Produk
              </a>
            </li>
            <li>
              <a href="#" className={linkClass('fitur')} onClick={() => scrollToSection('fitur')}>
                Akuakultur
              </a>
            </li>
            <li>
              <a href="#" className={linkClass('manfaat')} onClick={() => scrollToSection('manfaat')}>
                Manfaat
              </a>
            </li>
            <li>
              <a href="#" className={linkClass('testimoni')} onClick={() => scrollToSection('testimoni')}>
                Testimoni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
