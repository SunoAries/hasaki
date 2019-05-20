import { get } from '@/api/index'

export const testGet = () => get('https://api.github.com/users/octocat/orgs', {})
