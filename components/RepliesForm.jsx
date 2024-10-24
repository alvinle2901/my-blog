import React, { useRef, useState } from 'react';

import { submitReply } from '../services';

const RepliesForm = ({ commentId }) => {
  const replyInput = useRef();
  const nameInput = useRef();
  const emailInput = useRef();

  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleReplySubmission = () => {
    setError(false);

    const { value: reply } = replyInput.current;
    const { value: name } = nameInput.current;
    const { value: email } = emailInput.current;

    if (!reply || !name || !email) {
      setError(true);
      return;
    }

    const replyObj = { name, email, reply, commentId };

    submitReply(replyObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white rounded-lg ml-8 mt-4">
      <div className="grid grid-cols-1 gap-4 mb-2">
        <textarea
          ref={replyInput}
          className="p-4 text-sm outline-none w-full rounded-lg h-15 focus:ring-2 focus:ring-fray-200 bg-gray-100 text-gray-600"
          placeholder="Enter your reply"
          name="Reply"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <input
          type="text"
          ref={nameInput}
          className="py-2 px-4 text-sm outline-none w-full rounded-lg focus:ring-2 focus:ring-fray-200 bg-gray-100 text-gray-600"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailInput}
          className="py-2 px-4 text-sm outline-none w-full rounded-lg focus:ring-2 focus:ring-fray-200 bg-gray-100 text-gray-600"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && <p className="text-xs text-red-500">All fields are required.</p>}
      <div className="mt-2">
        <button
          type="button"
          onClick={handleReplySubmission}
          className="transition duration-500 ease hover:bg-indigo-800 inline-block bg-pink-600 text-sm rounded-full text-white px-4 py-2 cursor-pointer"
        >
          Post
        </button>
        {showSuccessMessage && (
          <span className="text-l float-right relative font-semibold mt-3 text-green-300">
            Replies Submitted for Review.
          </span>
        )}
      </div>
    </div>
  );
};

export default RepliesForm;
