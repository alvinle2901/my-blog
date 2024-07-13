import React, { useState } from 'react';
import Logo from './Logo';

import { FiMenu } from 'react-icons/fi';
import { Facebook, Instagram, Linkedin, XCircle } from 'react-feather';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/features' },
    { title: 'About me', href: '/about' },
    { title: 'Studio', href: '/studio' }
  ];
  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center px-4 lg:px-0 h-full">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Logo title="Bloggers" className="text-black" />
        </div>
        {/* Navigation */}
        <div className="flex flex-1 justify-center">
          <nav className="hidden lg:block">
            <ul className="flex items-center m-0 p-0 list-none">
              <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <div className="inline-block text-black text-xs font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  <Link href={`/`} key='home'>
                    Home
                  </Link>
                </div>
              </li>
              {/* <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <div
                  className="inline-block text-black text-xs font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  <Link href={`/`} key='home'>
                    Home
                  </Link>
                </div>
              </li> */}
              <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <div
                  className="inline-block text-black text-xs font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  <Link href={`/aboutme`} key='aboutme'>
                    About me
                  </Link>
                </div>
              </li>
              <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <a
                  href="contact.html"
                  className="inline-block text-black text-xs font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="hidden lg:block">
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook account link">
                <Facebook className="w-4 h-4 ml-1 hover:text-[#ec4899]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram account link">
                <Instagram className="w-4 h-4 ml-1 hover:text-[#ec4899]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn account link">
                <Linkedin className="w-4 h-4 ml-1 hover:text-[#ec4899]" />
              </a>
            </div>
          </div>
          {/* Off-canvas */}
          <div className="md:hidden">
            <button onClick={toggleOffcanvas}>
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
        {/* <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="text-sm uppercase font-semibold relative group overflow-hidden">
                <>
                  {item?.title}
                  <span className="w-full h-[1px] bg-blue-700 absolute inline-block -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
                </>
              </Link>
          ))}
        </div> */}
      </div>
      <div className={`offcanvas ${isOpen ? '' : 'hidden'}`}>
        <div class="fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-black bg-opacity-70 offcanvas">
          <div class="h-full transition-all duration-300 ease-in-out bg-pink-200 float-right transform translate-x-full offcanvas__inner">
            <header class="flex items-center justify-between p-4 bg-white">
              <div class="flex-1">
                <a href="index.html" class="block">
                  <img src="./assets/img/logo/logo.png" alt="Logo" />
                </a>
              </div>
              <div class="flex-1 text-right">
                <button
                  class="btn-close"
                  onClick={toggleOffcanvas}
                  aria-label="Close mobile menu offcanvas">
                  <XCircle />
                </button>
              </div>
            </header>
            <div class="p-5 sm:p-10 md:p-10 h-full offcanvas__body">
              <div class="menu-offcanvas">
                <ul class="list-none p-0 m-0">
                  <li class="py-2">
                    <a
                      href="index.html"
                      class="block text-black font-medium uppercase mobile-menu__link active">
                      Home
                    </a>
                  </li>
                  <li class="py-2">
                    <a
                      href="#feature-posts"
                      class="block text-black font-medium uppercase mobile-menu__link">
                      Features
                    </a>
                  </li>
                  <li class="py-2">
                    <a
                      href="about-me.html"
                      class="block text-black font-medium uppercase mobile-menu__link">
                      About Me
                    </a>
                  </li>
                  <li class="py-2">
                    <a
                      href="contact.html"
                      class="block text-black font-medium uppercase mobile-menu__link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div class="mt-20 flex space-x-4 text-white">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social__link"
                    aria-label="Facebook account link">
                    <i data-feather="facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social__link"
                    aria-label="Instagram account link">
                    <i data-feather="instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social__link"
                    aria-label="LinkedIn account link">
                    <i data-feather="linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social__link"
                    aria-label="Twitter account link">
                    <i data-feather="twitter"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social__link"
                    aria-label="YouTube account link">
                    <i data-feather="youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
