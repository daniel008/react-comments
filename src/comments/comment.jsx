import React, { useState } from 'react'
import LikeButton from './like'
import { CaretDownOutlined } from '@ant-design/icons'

function Comment({ comment, replies }) {
  // console.log('comment', comment)
  const [expandComments, setExpandComments] = useState(false)

  const replyExpanded = () => {
    setExpandComments(!expandComments)
  }

  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src={comment.avatar} alt="avatar" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">
            <span className="ant-comment-content-author-name">
              {comment.nickname}
            </span>
            {comment.is_author === 1 ? (
              <mark className="author">作者</mark>
            ) : null}
          </div>
          <span className="comment-date">{comment.date}</span>
        </div>
        <div className="comment-text">{comment.text}</div>
        <div>
          <LikeButton comment={comment} />
        </div>
        <div className="replies">
          <p
            style={{ fontSize: '1.4rem', margin: 0, color: 'gray' }}
            onClick={replyExpanded}
          >
            展开更多
            <CaretDownOutlined />
          </p>
          {expandComments && replies.length > 0 && (
            <div className="replies ">
              {replies.map((reply) => (
                <Comment comment={reply} replies={[]} key={reply.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comment
