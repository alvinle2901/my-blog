import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative md:h-72 h-44">
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full md:h-72 h-44"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full md:h-72 h-44" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow md:text-xs text-[10px]">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="w-2/3 text-white mb-4 text-shadow font-semibold md:text-xl text-base text-center hover:underline">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </p>
      {/* <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          {post.author.name}
        </p>
      </div> */}
    </div>
  </div>
);

export default FeaturedPostCard;
