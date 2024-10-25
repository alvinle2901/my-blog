import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left ">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between max-w-screen-xl mx-auto px-4 lg:px-0 h-full">
        <div className="mr-12 hidden lg:block font-light text-sm">
          <span>Copyright @2023 Bach Le | All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
