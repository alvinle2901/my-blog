import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src="/logo1.png" width={120} height={60} alt="logo" />
    </Link>
  );
};

export default Logo;
