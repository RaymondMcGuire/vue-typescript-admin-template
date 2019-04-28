import { param2Obj } from './utils'

const tokens: { [index: string]: any } = {
  admin: {
    token: 'admin-token'
  },
  developer: {
    token: 'developer-token'
  }
}

const users: { [index: string]: any } = {
  'admin-token': {
    roles: ['admin'],
    introduction: '超级用户',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级用户'
  },
  'developer-token': {
    roles: ['developer'],
    introduction: '开发者',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '王旭'
  }
}

export default {
  login: (res: any) => {
    const { username } = JSON.parse(res.body)
    const data = tokens[username]

    if (data) {
      return {
        code: 20000,
        data
      }
    }

    return {
      code: 60204,
      message: 'Account or password is incorrect.'
    }
  },

  getUserInfo: (res: any) => {
    const { token } = param2Obj(res.url)
    const info = users[token]

    if (info) {
      return {
        code: 20000,
        data: info
      }
    }

    return {
      code: 50008,
      message: 'Login failed, unable to get user details.'
    }
  },

  logout: () => {
    return {
      code: 20000,
      data: 'success'
    }
  }
}
