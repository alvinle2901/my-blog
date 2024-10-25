import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '@services';
import moment from 'moment';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <h3 className="text-xl uppercase font-[500] mb-4 border-b pb-1">
        {slug ? 'bài viết liên quan' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div
          key={index}
          className={`flex items-center w-full ${
            index !== relatedPosts.length - 1 ? 'border-b pb-1 mb-4' : ''
          }`}
        >
          <div className="w-20 flex-none">
            <Image
              alt={post.title}
              height="80px"
              width="80px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-5">
            <p className="text-gray-500 font-xs transform">
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <h2 className="text-md hover:text-[#ec4899] py-2 line-clamp-3">
              <Link href={`/post/${post.slug}`} key={index}>
                {post.title}
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
