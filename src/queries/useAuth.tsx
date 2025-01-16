import authApiRequest from '@/apiRequests/auth'
import { useMutation } from '@tanstack/react-query'

// Mutate async: POST, PUT, DELETE
export const useLoginMutation = () => useMutation({ mutationFn: authApiRequest.login })
export const useLogoutMutation = () => useMutation({ mutationFn: authApiRequest.logout })
export const useSetTokenToCookieMutation = () => {
  return useMutation({ mutationFn: authApiRequest.setTokenToCookie })
}
