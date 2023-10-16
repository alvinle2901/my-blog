import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'
import Replies from './Replies'
import RepliesForm from './RepliesForm'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])
  const [replyState, setReplyState] = useState(false)

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="md:text-xl text-base mb-8 font-semibold border-b pb-4">
            {comments.length} Bình luận mới nhất
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-100 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
              <div
                className="cursor-pointer text-sm text-pink-600 mt-2"
                onClick={() => setReplyState(!replyState)}
              >
                Reply
              </div>

              <Replies comment={comment.comment} />
              {replyState && <RepliesForm commentId={comment.id} />}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
