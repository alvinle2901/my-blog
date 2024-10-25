import React, { useEffect, useState } from 'react';
import { ArrowRight, Facebook, GitHub, Instagram, Linkedin } from 'react-feather';

import Link from 'next/link';

import { getMyInfo } from '@services';

const MyInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getMyInfo().then((newInfo) => setInfo(newInfo));
  }, []);

  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      {/* Title */}
      <h3 className="text-xl uppercase font-[500] mb-2 border-b pb-1">About Me</h3>
      <div className="relative overflow-hidden p-4 mb-2">
        <img
          src={info.photo?.url}
          alt={info.name}
          className="object-top h-full w-full rounded-full"
        />
      </div>
      <div className="block mb-3 font-semilight text-base">
        <span>{info.bio} </span>
        <Link href={`/aboutme`}>
          <ArrowRight className="w-4 h-4 mb-1 hover:text-[#ec4899] cursor-pointer inline-flex items-center" />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <div className="flex space-x-4 text-gray-400">
          <a
            href={info.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook account link"
            className="p-2"
          >
            <Facebook className="w-5 h-5 ml-1 hover:text-[#ec4899] transition duration-500 transform hover:-translate-y-1" />
          </a>
          <a
            href={info.instagramLink1}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram account link"
            className="p-2"
          >
            <Instagram className="w-5 h-5 ml-1 hover:text-[#ec4899] transition duration-500 transform hover:-translate-y-1" />
          </a>
          <a
            href={info.linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn account link"
            className="p-2"
          >
            <Linkedin className="w-5 h-5 ml-1 hover:text-[#ec4899] transition duration-500 transform hover:-translate-y-1" />
          </a>
          <a
            href={info.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github account link"
            className="p-2"
          >
            <GitHub className="w-5 h-5 ml-1 hover:text-[#ec4899] transition duration-500 transform hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
