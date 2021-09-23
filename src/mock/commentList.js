import Mock from 'mockjs'

const random = Mock.Random
const mock = Mock.mock

export default mock({
  status: () => (Math.random() >= 0.05 ? 0 : 1),
  has_more: () => (Math.random() >= 0.05 ? 1 : 0),
  'comments|10': [
    {
      'comment_id|+1': [
        '7687409156096',
        '7687409156097',
        '7687409156098',
        '7687409156099',
        '7687409156010',
        '7687409156011',
        '7687409156012',
        '7687409156013',
        '7687409156014',
        '7687409156015',
      ],
      'nickname|+1': [
        '职业水手',
        '陈卓克星',
        '正直青年123123123123123123123123123123',
        '猫咪森林',
        '夏天的西瓜🍉',
        '吃菠萝不吐菠萝皮儿🍍',
      ],
      'avatar|+1': [
        'https://p0.pstatp.com/origin/3795/3033762272',
        'https://p3.douyinpic.com/aweme/720x720/fce9000735c989d368e9.jpeg',
        'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
        'https://p6.douyinpic.com/img/tos-cn-i-0813/320d48e7bef74f23a3b630159c67e2a5~c5_720x720.jpeg?from=4010531038',
        'https://p0.pstatp.com/origin/3795/3033762272',
        'https://p3.douyinpic.com/aweme/720x720/fce9000735c989d368e9.jpeg',
        'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
        'https://p0.pstatp.com/origin/3795/3033762272',
        'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
      ],
      'text|+1': ['这是什么神仙颜值', '楼上正解', '真好看'],
      'digg_num|30-100000': 30,
      is_author: () => (Math.random() >= 0.3 ? 0 : 1),
      date: () =>
        new Date(parseInt(new Date().getTime() - Math.random() * 1000000000)),
      'sub_comment|0-2': [
        {
          'comment_id|+1': [
            '7687409156096',
            '7687409156097',
            '7687409156098',
            '7687409156099',
            '7687409156010',
            '7687409156011',
            '7687409156012',
            '7687409156013',
            '7687409156014',
            '7687409156015',
          ],
          'nickname|+1': [
            '职业水手',
            '陈卓克星',
            '正直青年123123123123123123123123123123',
            '猫咪森林',
            '夏天的西瓜🍉',
            '吃菠萝不吐菠萝皮儿🍍',
          ],
          'avatar|+1': [
            'https://p0.pstatp.com/origin/3795/3033762272',
            'https://p3.douyinpic.com/aweme/720x720/fce9000735c989d368e9.jpeg',
            'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
            'https://p6.douyinpic.com/img/tos-cn-i-0813/320d48e7bef74f23a3b630159c67e2a5~c5_720x720.jpeg?from=4010531038',
            'https://p0.pstatp.com/origin/3795/3033762272',
            'https://p3.douyinpic.com/aweme/720x720/fce9000735c989d368e9.jpeg',
            'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
            'https://p0.pstatp.com/origin/3795/3033762272',
            'https://p3.douyinpic.com/img/tos-cn-avt-0015/aaeb17ca266c8debf9adef9d5719acd0~c5_720x720.jpeg?from=4010531038',
          ],
          'text|+1': ['这是什么神仙颜值', '楼上正解', '真好看', '赞同'],
          'digg_num|30-100000': 30,
          is_author: () => (Math.random() >= 0.3 ? 0 : 1),
          date: () =>
            new Date(
              parseInt(new Date().getTime() - Math.random() * 10000000000)
            ),
        },
      ],
    },
  ],
})
