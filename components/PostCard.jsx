import React from 'react';
import moment from 'moment';
import Link from 'next/link';

import { ChevronRight, Facebook, MessageCircle } from 'react-feather';
import { FaGooglePlus } from 'react-icons/fa6';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg p-0 mb-8">
      {/* Image */}
      <div className="relative overflow-hidden pb-2/3 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute object-center object-cover w-full rounded-t-lg lg:rounded-lg"
        />
        {/* Tag */}
        <div className="absolute top-6 left-6 bg-black text-white text-xs py-2 px-6 rounded shadow">
          <a href="#" class="uppercase">
            {post.categories[0].name}
          </a>
        </div>
      </div>
      <div className="px-12 py-8">
        {/* Date */}
        <span className="block text-sm uppercase tracking-widest">
          {moment(post.createdAt).format('DD MMM YYYY')}
        </span>
        {/* Title */}
        <h2 className="my-3 text-2xl font-serif hover:text-[#ec4899]">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h2>
        {/* Excerpt */}
        <p className="text-justify font-light tracking-wide leading-relaxed my-3">
          {post.excerpt}
          <a href="#">
            <i class="icon-arrow-right2 ml-1 text-xs"></i>
          </a>
        </p>
        {/* Read more */}
        <a
          href={`/post/${post.slug}`}
          className="mt-4 inline-block text-base uppercase font-[500] text-[#090606] p-0 hover:text-[#ec4899]">
          <span className="inline-flex items-center">
            Read More <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </a>
      </div>
      <div className="flex justify-between items-center p-12 pt-4 mt-1 rounded-b-lg">
        <div className="text-xs tracking-widest">
          Post By{' '}
          <a href="#" class="uppercase">
            {post.author.name}
          </a>
        </div>
        <div class="flex items-center space-x-2">
          <a href="#" className="p-2">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="p-2">
            <FaGooglePlus className="w-4 h-4" />
          </a>
          <span class="flex items-center pl-2">
            {post.comments.length} <MessageCircle className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
