import React, { Fragment, useContext, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Menu, Transition } from '@headlessui/react';
import { getCategories } from '@services';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white py-7 items-center">
        <div className="md:float-left contents block">
          <div className="float-left mt-3">
            <Link href="/" key="home">
              <span className="cursor-pointer md:text-3xl text-xl text-white">chú pé ngu ngục</span>
            </Link>
          </div>
          <div className="md:hidden float-right">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image src="/close-icon.svg" width={30} height={30} alt="logo" />
              ) : (
                <Image
                  src="/menu-icon.svg"
                  width={30}
                  height={30}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:contents">
          <Link href="/aboutme" key="aboutme">
            <span className="md:float-right mt-4 align-middle text-white ml-4 font-semibold cursor-pointer">
              About Me
            </span>
          </Link>
          <Menu as="div" className="relative md:float-right mt-2">
            <Menu.Button
              key="blogs"
              className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer"
            >
              My Blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="md:float-right mt-1 align-middle ml-1 h-4 w-4"
              >
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
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                key="list"
                className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 divide-y divide-gray-100 focus:outline-none"
              >
                {categories.map((category) => (
                  <div className="py-1" key={category.name}>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/category/${category.slug}`}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm sticky'
                          )}
                        >
                          {category.name}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 md:block md:pb-0 ${
            navbar ? 'p-8 md:p-0 block' : 'hidden'
          }`}
        >
          <ul className="md:hidden h-screen md:h-auto items-center justify-center md:flex ">
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-white  border-white  hover:text-white hover:bg-transparent">
              <Link href="/aboutme">
                <a
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                >
                  about me
                </a>
              </Link>
            </li>
            {categories.map((category) => (
              <li
                className="pb-6 text-xl text-white py-2 mt-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-white  border-white hover:text-white hover:bg-transparent"
                key={category.name}
              >
                <Link href={`/category/${category.slug}`}>
                  <a onClick={() => setNavbar(!navbar)}>{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
