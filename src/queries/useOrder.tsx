import orderApiRequest from '@/apiRequests/order'
import { GetOrdersQueryParamsType, PayGuestOrdersBodyType, UpdateOrderBodyType } from '@/schemaValidations/order.schema'
import { useMutation, useQuery } from '@tanstack/react-query'

// useQuery - Get
// useMutation: POST, PUT, DELETE
// useQueryClient: Invalidate/refresh cache when data change Ex: Add, Update, Delete
export const useUpdateOrderMutation = () => {
  return useMutation({
    mutationFn: ({ orderId, ...body }: UpdateOrderBodyType & { orderId: number }) =>
      orderApiRequest.updateOrder(orderId, body)
  })
}
export const useGetOrderListQuery = (queryParams: GetOrdersQueryParamsType) => {
  return useQuery({
    queryFn: () => orderApiRequest.getOrderList(queryParams),
    queryKey: ['orders', queryParams]
  })
}
export const useGetOrderDetailQuery = ({ id, enabled }: { id: number; enabled: boolean }) => {
  return useQuery({
    queryFn: () => orderApiRequest.getOrderDetail(id),
    queryKey: ['orders', id],
    enabled
  })
}
export const usePayForGuestMutation = () => {
  return useMutation({ mutationFn: (body: PayGuestOrdersBodyType) => orderApiRequest.pay(body) })
}
export const useCreateOrderMutation = () => useMutation({ mutationFn: orderApiRequest.createOrders })
