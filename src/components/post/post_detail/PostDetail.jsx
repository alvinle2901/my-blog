import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import moment from 'moment';

const PostDetail = ({ post }) => {
  const images = [];

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8 md:text-base text-sm">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        images.push({ original: obj.src, thumbnail: obj.src });
        return (
          <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white rounded-lg md:pb-12 pb-4 mb-8">
      <div className="relative overflow-hidden mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-8">
        <div className="flex items-center mb-8">
          <div className="flex items-center mb-0 lg:w-auto md:mr-8 mr-5">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 md:text-lg text-base">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 md:text-base text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="inline align-middle text-gray-700 text-base">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
          </div>
        </div>
        <h1 className="mb-8 md:text-3xl text-xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
        {post.categories[0].slug != 'travel' ? null : (
          <ImageGallery items={images} showPlayButton={false} />
        )}
      </div>
    </div>
  );
};

export default PostDetail;
