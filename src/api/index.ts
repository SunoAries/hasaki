import { stringify } from '@/utils'

export const baseRequest = (method: string) => async (url: string, options: {}) => {
  let resp
  let data
  try {
    const requestOptions = {
      ...options,
      method,
    }
    resp = await fetch(url, requestOptions)
  } catch (e) {
    return Promise.reject({ err: 'networkErr', msg: '网络错误' })
  }
  try {
    data = await resp.json()
  } catch (e) {
    return Promise.reject({ err: 'serverErr', msg: '服务器返回数据错误' })
  }
  return data
}

export const get = baseRequest('get')
