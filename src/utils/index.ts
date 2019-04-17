export const stringify = (params: any): string => {
  return params.toString()
}
export const parse = (str: string): {} => {
  return {
    data: str,
  }
}
