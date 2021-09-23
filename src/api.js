export const getComments = async () => {
  return [
    {
      id: '1',
      body: '这是什么神仙颜值',
      username: '职业水手',
      userId: '1',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
      liked: true,
    },
    {
      id: '2',
      body: '楼上正解',
      username: '陈卓克星',
      userId: '2',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      body: '到底是什么牌子？',
      username: '林叨叨',
      userId: '3',
      parentId: null,
      createdAt: '2021-08-16T23:00:35.010+02:00',
    },
    {
      id: '3',
      body: '真好看',
      username: '猫咪森林',
      userId: '2',
      parentId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      body: '赞同',
      username: '夏天的西瓜🍉',
      userId: '2',
      parentId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
  ]
}

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: '1',
    username: 'John',
    createdAt: new Date().toISOString(),
  }
}

export const updateComment = async (text) => {
  return { text }
}

export const deleteComment = async () => {
  return {}
}
