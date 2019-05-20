// anti-restiful 原则
export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export interface IResponse<T = {}> {
  err: null | string
  msg: string
  data: T
}
