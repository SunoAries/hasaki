import { Cookies } from '@/utils'
import { Methods, IResponse } from './typings'

const commonOptions = (): RequestInit => {
  return {
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken') || '',
    },
  }
}

export const baseRequest = (method: Methods, isJSON: boolean) => async <T, U>(
  url: string,
  options: {},
  defaultOptions: RequestInit = commonOptions(),
): Promise<{}> => {
  let resp: Response
  let data: U
  const params = '?asdf=sdfa'
  try {
    const requestOptions = {
      ...options,
      method,
      ...defaultOptions,
      body: params,
    }
    // TODO fetch 的option没有验证，会抛出错误
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

export const get = baseRequest(Methods.GET, false)
export const post = baseRequest(Methods.POST, false)
export const put = baseRequest(Methods.PUT, false)
export const rdelete = baseRequest(Methods.DELETE, false)
