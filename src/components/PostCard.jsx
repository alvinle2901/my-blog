import React from 'react';
import { ChevronRight, Facebook, MessageCircle, Twitter } from 'react-feather';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Tooltip } from 'react-tooltip';

import Link from 'next/link';

import moment from 'moment';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg mb-8">
      {/* Image */}
      <div className="relative overflow-hidden pb-2/3 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute object-center object-cover w-full rounded-t-lg lg:rounded-lg"
        />
        {/* Tag */}
        <div className="absolute top-6 left-6 bg-black text-white text-xs py-2 px-6 rounded shadow">
          <a href="#" className="uppercase">
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
        <p className="text-justify font-light tracking-wide leading-relaxed my-3">{post.excerpt}</p>
        {/* Read more */}
        <a
          href={`/post/${post.slug}`}
          className="mt-4 inline-block text-base uppercase font-[500] text-[#090606] p-0 hover:text-[#ec4899]"
        >
          <span className="inline-flex items-center">
            Read More <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </a>
      </div>
      <div className="flex justify-between items-center px-12 py-8 pt-4 mt-1 rounded-b-lg border-t-2">
        <div className="text-xs tracking-widest">
          Post By{' '}
          <a href="#" class="uppercase">
            {post.author.name}
          </a>
        </div>
        <div class="flex items-center space-x-2">
          <FacebookShareButton
            url={`https://www.alvinle29.site/post/${post.slug}`}
            data-tooltip-id="fb-share"
            data-tooltip-content="Share to Facebook"
          >
            <Facebook className="w-4 h-4 mr-2" />
          </FacebookShareButton>
          {/* <Tooltip id="fb-share" /> */}

          <TwitterShareButton
            url={`https://www.alvinle29.site/post/${post.slug}`}
            data-tooltip-id="tw-share"
            data-tooltip-content="Share to Twitter/X"
          >
            <Twitter className="w-4 h-4" />
          </TwitterShareButton>
          {/* <Tooltip id="tw-share" /> */}

          <span class="flex items-center pl-2">
            {post.comments.length} <MessageCircle className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
