import Mock from 'mockjs';
import commentList from './commentList';
import replyList from './replyList';

const random = Mock.Random
const mock = Mock.mock


Mock.setup({
    timeout: '100-500'
})

const config = {
    "http://douyin.bytedance.com/api/comment/list": commentList,
    "http://douyin.bytedance.com/api/reply/list": replyList,
}


const init = () => {
    Object.entries(config).map(item=>mock.apply(null,item))
}
export default init