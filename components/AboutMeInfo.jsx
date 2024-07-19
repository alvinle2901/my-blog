import React, { useState, useEffect } from 'react'
import { getMyInfo } from '../services'

const AboutMeInfo = () => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
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
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8 md:text-base text-sm">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'link':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  const [info, setInfo] = useState([])

  useEffect(() => {
    getMyInfo().then((newInfo) => setInfo(newInfo))
  }, [])

  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <h3 className="text-3xl mb-8 border-b pb-4 font-medium text-center">
        About me
      </h3>
      {/*<div className="relative overflow-hidden shadow-md mb-6 invisible">
        <img
          src={info.photo?.url}
          alt={info.name}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>*/}
      {info.introduction?.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(itemIndex, item.text, item)
        )

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}

export default AboutMeInfo
