import React, {useState} from 'react';
import axios from 'axios';
import imageSrc from '../../static/demo.png';

function PC() {
  const [commentList, setCommentList] = useState();
  axios.get('http://douyin.bytedance.com/api/comment/list').then ((response) => {
    setCommentList(JSON.stringify(response.data))
  });

  return (
    <div style={{width: '100%'}}>
      <h2>实现设计稿内容，请参考如下API的返回值</h2>
      <img style={{width: '800px'}} src={imageSrc} alt="" />
      <h2>/api/comment/list参考返回值</h2>
      <pre>
        {commentList}
      </pre>
    </div>
  );
}

export default PC;
