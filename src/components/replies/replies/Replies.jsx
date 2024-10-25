import React, { useEffect, useState } from 'react';

import { getReplies } from '@services';
import moment from 'moment';

import { RepliesForm } from '../replies_form';

const Replies = ({ comment }) => {
  const [replies, setReplies] = useState([]);
  const [replyState, setReplyState] = useState(false);

  useEffect(() => {
    getReplies(comment).then((result) => setReplies(result));
  }, []);

  return (
    <>
      {replies.length > 0 && (
        <div className="bg-white rounded-lg ml-8 mt-5">
          {replies.map((reply) => (
            <div key={reply.createdAt} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-2">
                <span className="font-semibold">{reply.name}</span> on{' '}
                {moment(reply.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">{reply.reply}</p>
              <div
                className="cursor-pointer text-sm text-pink-600 mt-2"
                onClick={() => setReplyState(!replyState)}
              >
                Reply
              </div>
              {replyState && <RepliesForm commentId={comment.id} />}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Replies;
