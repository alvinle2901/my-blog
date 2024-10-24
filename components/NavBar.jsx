import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Logo from './Logo';

import { Menu, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';
import { Facebook, Instagram, Linkedin, XCircle } from 'react-feather';

import { getCategories } from '../services';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center px-4 lg:px-0 h-full">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start cursor-pointer">
          <Logo title="Bach Le" className="text-black" />
        </div>
        {/* Navigation */}
        <div className="flex flex-1 justify-center">
          <nav className="hidden lg:block">
            <ul className="flex items-center m-0 p-0 list-none">
              <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <div className="inline-block text-black text-sm font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  <Link href={`/`} key="home">
                    Home
                  </Link>
                </div>
              </li>
              <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <Menu as="div" className="relative md:float-right mt-2">
                  <Menu.Button
                    key="blogs"
                    className="mb-2 inline-block text-black text-sm font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                    My Blogs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:float-right mt-2 align-middle ml-1 h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                      key="list"
                      className="origin-top-right absolute right-0 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 divide-y divide-gray-100 focus:outline-none">
                      {categories.map((category) => (
                        <div className="py-1" key={category.name}>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href={`/category/${category.slug}`}
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm sticky'
                                )}>
                                {category.name}
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <div className="inline-block text-black text-sm font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  <Link href={`/aboutme`} key="aboutme">
                    About me
                  </Link>
                </div>
              </li>
              {/* <li className="px-4 first:ml-0 first:pl-0 last:mr-0 last:pr-0">
                <a
                  href="contact.html"
                  className="inline-block text-black text-xs font-medium leading-8 uppercase relative before:absolute before:content-[''] before:left-0 before:top-[90%] before:w-full before:h-full after:absolute after:content-[''] after:transition-all after:duration-300 after:ease-in-out after:z-[-1] after:left-1 after:bottom-1 after:w-0 after:h-2 after:bg-pink-200 hover:after:w-[72%] active:after:w-[72%]">
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="hidden lg:block">
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://www.facebook.com/alvinle29"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook account link">
                <Facebook className="w-4 h-4 ml-1 hover:text-[#ec4899]" />
              </a>
              <a
                href="https://www.instagram.com/shot_by_al_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram account link">
                <Instagram className="w-4 h-4 ml-1 hover:text-[#ec4899]" />
              </a>
              <a
                href="https://www.linkedin.com/in/bach-l-298105138/"
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
        <div className="fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-black bg-opacity-70 offcanvas">
          <div className="h-full transition-all duration-300 ease-in-out bg-pink-200 float-right transform translate-x-full offcanvas__inner">
            <header className="flex items-center justify-between p-4 bg-white">
              <div className="flex-1">
                <a href="index.html" className="block">
                  <img src="./assets/img/logo/logo.png" alt="Logo" />
                </a>
              </div>
              <div className="flex-1 text-right">
                <button
                  className="btn-close"
                  onClick={toggleOffcanvas}
                  aria-label="Close mobile menu offcanvas">
                  <XCircle />
                </button>
              </div>
            </header>
            <div className="p-5 sm:p-10 md:p-10 h-full offcanvas__body">
              <div className="menu-offcanvas">
                <ul className="list-none p-0 m-0">
                  <li className="py-2">
                    <a
                      href="index.html"
                      className="block text-black font-medium uppercase mobile-menu__link active">
                      Home
                    </a>
                  </li>
                  <li className="py-2">
                    <a
                      href="#feature-posts"
                      className="block text-black font-medium uppercase mobile-menu__link">
                      Features
                    </a>
                  </li>
                  <li className="py-2">
                    <a
                      href="about-me.html"
                      className="block text-black font-medium uppercase mobile-menu__link">
                      About Me
                    </a>
                  </li>
                  <li className="py-2">
                    <a
                      href="contact.html"
                      className="block text-black font-medium uppercase mobile-menu__link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="mt-20 flex space-x-4 text-white">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
                    aria-label="Facebook account link">
                    <i data-feather="facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
                    aria-label="Instagram account link">
                    <i data-feather="instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
                    aria-label="LinkedIn account link">
                    <i data-feather="linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
                    aria-label="Twitter account link">
                    <i data-feather="twitter"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__link"
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
