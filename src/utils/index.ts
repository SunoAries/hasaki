export const stringify = (params: any): string => {
  if (!params) return ''
  const pairs = []
  for (let name in params) {
    if (!params.hasOwnProperty(name)) continue
    if (typeof params[name] === 'function') continue
    let value = params[name].toString()
    name = encodeURIComponent(name)
    value = encodeURIComponent(value)
    pairs.push(name + '=' + value)
  }
  return pairs.join('&')
}
export const parse = (str: string): {} => {
  return {
    data: str,
  }
}

export const Cookies = {
  get(params: string): string | null {
    const cookie = {}
    const all = document.cookie
    if (all === '') {
      return null
    }
    const list = all.split('; ')
    for (let i = 0, len = list.length; i < len; i++) {
      const item = list[i]
      const p = item.indexOf('=')
      let name = item.substring(0, p)
      let value = item.substring(p + 1)
      name = decodeURIComponent(name)
      value = decodeURIComponent(value)
      cookie[name] = value
    }
    return cookie[params]
  },
  setCookie(
    name: string,
    value: string,
    expires?: Date,
    path?: string,
    domain?: string,
    secure?: string,
  ) {
    let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (expires) {
      cookie += '; expires=' + expires.toUTCString()
    }
    if (path) {
      cookie += '; path=' + path
    }
    if (domain) {
      cookie += '; domain=' + domain
    }
    if (secure) {
      cookie += '; secure=' + secure
    }
    document.cookie = cookie
  },
  remove(name: string) {
    Cookies.setCookie(name, '', new Date(0))
  },
}
