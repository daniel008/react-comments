import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from './comment'
// import ReplyComment from './replyComment'

function Comments({ currentUserId }) {
  const [commentList, setCommentList] = useState([])
  const [replyList, setReplyList] = useState([])

  useEffect(() => {
    getCommentList()
    getReplies()
  }, [])

  const getCommentList = async () => {
    const response = await axios.get(
      'http://douyin.bytedance.com/api/comment/list'
    )
    setCommentList(response.data.comments)
  }

  const getReplies = async () => {
    const response = await axios.get(
      'http://douyin.bytedance.com/api/reply/list'
    )
    setReplyList(response.data.comments)
  }

  console.log(replyList)
  return (
    <div className="comments">
      <span className="comments-title">全部评论</span>
      <hr />
      <div className="comments-container">
        {commentList.map((comment) => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            replies={replyList}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments
