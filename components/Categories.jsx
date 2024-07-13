import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      if (newCategories) {
        setCategories(newCategories);
      } else {
        setCategories([]);
      }
    });
  }, []);

  return (
    <div className="bg-white shadow=lg rounded-lg p-8 mb-8">
      <h3 className="text-xl uppercase font-[500] mb-4 border-b pb-1">
        categories
      </h3>

      {categories.map((category, index) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block hover:text-[#ec4899] ${
              index !== categories.length - 1 ? 'mb-4 pb-2' : ''
            }`}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
