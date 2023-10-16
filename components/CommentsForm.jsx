import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentInput = useRef()
  const nameInput = useRef()
  const emailInput = useRef()
  const dataStoredInput = useRef()

  useEffect(() => {
    nameInput.current.value = window.localStorage.getItem('name')
    emailInput.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentInput.current
    const { value: name } = nameInput.current
    const { value: email } = emailInput.current
    const { checked: dataStored } = dataStoredInput.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if (dataStored) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)

      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="md:text-xl text-base mb-8 font-semibold border-b pb-4">
        để lại bình luận hen cạ nhà ^^
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentInput}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-fray-200 bg-gray-100 text-gray-600"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameInput}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-fray-200 bg-gray-100 text-gray-600"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailInput}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-fray-200 bg-gray-100 text-gray-600"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={dataStoredInput}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Save my email and name for the next time I comment
          </label>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-800 inline-block bg-pink-600 md:text-lg text-base rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="md:text-l text-base float-right relative font-semibold mt-3 text-green-300">
            Comment Submitted for Review.
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
