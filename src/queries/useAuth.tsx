import authApiRequest from '@/apiRequests/auth'
import { useMutation } from '@tanstack/react-query'

// useQuery - Get
// useMutation: POST, PUT, DELETE
// useQueryClient: Invalidate/refresh cache when data change Ex: Add, Update, Delete
export const useLoginMutation = () => useMutation({ mutationFn: authApiRequest.login })
export const useLogoutMutation = () => useMutation({ mutationFn: authApiRequest.logout })
export const useSetTokenToCookieMutation = () => useMutation({ mutationFn: authApiRequest.setTokenToCookie })
