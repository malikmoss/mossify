import fetcher from './fetcher'

export const auth = (
  mode: 'signin' | 'signup',
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body)
}
import fetcher from "./fetcher"

export const auth = (
    mode: 'sigin' | 'signup', 
    body: {email:string; password: string}
    ) => {
    return fetcher(`/auth/${mode}`, body)
    }
