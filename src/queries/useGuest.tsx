import guestApiRequest from '@/apiRequests/guest'
import { useMutation, useQuery } from '@tanstack/react-query'

// useQuery - Get
// useMutation: POST, PUT, DELETE
// useQueryClient: Invalidate/refresh cache when data change Ex: Add, Update, Delete
export const useGuestLoginMutation = () => useMutation({ mutationFn: guestApiRequest.login })
export const useGuestLogoutMutation = () => useMutation({ mutationFn: guestApiRequest.logout })
export const useGuestOrderMutation = () => useMutation({ mutationFn: guestApiRequest.order })
export const useGuestGetOrderListQuery = () => {
  return useQuery({ queryFn: guestApiRequest.getOrderList, queryKey: ['guest-orders'] })
}
