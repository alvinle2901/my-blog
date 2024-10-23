import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }: Props) => {
  return (
    <Link href={'/'}>
      {/* <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
        {title || "Bloggers"}
      </h1> */}
      {/* <img src={'../public/logo.png'} className="" /> */}

      <Image src="/logo1.png" width={120} height={60} alt="logo" />
    </Link>
  );
};

export default Logo;
