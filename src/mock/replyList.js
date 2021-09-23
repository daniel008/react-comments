import Mock from 'mockjs'

const random = Mock.Random
const mock = Mock.mock

export default mock({
    'status': 0,
    'has_more': 0,
    'comments|7': [
        {
            'reply_id': '7687409156096',
            'nickname|+1': [
                '正直青年123123123123123123123123123123',
                '吃菠萝不吐菠萝皮儿🍍',
            ],
            'avatar|+1': [
                'https://p0.pstatp.com/origin/3795/3033762272',
                'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
            ],
            'text|+1': [
                '楼上正解',
                '真好看',
            ],
            'digg_num|30-100000': 30,
            'is_author': () => Math.random() >= 0.3 ? 0 : 1,
            'date': () => new Date(parseInt((new Date()).getTime() - Math.random() * 1000000000)),
        }
    ],
})
