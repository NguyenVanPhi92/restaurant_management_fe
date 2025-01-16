import guestApiRequest from '@/apiRequests/guest'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGuestLoginMutation = () => useMutation({ mutationFn: guestApiRequest.login })
export const useGuestLogoutMutation = () => useMutation({ mutationFn: guestApiRequest.logout })
export const useGuestOrderMutation = () => useMutation({ mutationFn: guestApiRequest.order })
export const useGuestGetOrderListQuery = () => {
  return useQuery({ queryFn: guestApiRequest.getOrderList, queryKey: ['guest-orders'] })
}
