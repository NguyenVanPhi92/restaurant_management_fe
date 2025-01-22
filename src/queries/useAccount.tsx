import accountApiRequest from '@/apiRequests/account'
import { GetGuestListQueryParamsType, UpdateEmployeeAccountBodyType } from '@/schemaValidations/account.schema'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// useQuery - Get
// useMutation: POST, PUT, DELETE
// useQueryClient: Invalidate/refresh cache when data change Ex: Add, Update, Delete
export const useAccountMe = () => {
  return useQuery({ queryKey: ['account-me'], queryFn: accountApiRequest.me })
}
export const useUpdateMeMutation = () => useMutation({ mutationFn: accountApiRequest.updateMe })
export const useChangePasswordMutation = () => useMutation({ mutationFn: accountApiRequest.changePassword })
export const useGetAccountList = () => {
  return useQuery({ queryKey: ['accounts'], queryFn: accountApiRequest.list })
}
export const useGetAccount = ({ id, enabled }: { id: number; enabled: boolean }) => {
  return useQuery({ queryKey: ['accounts', id], queryFn: () => accountApiRequest.getEmployee(id), enabled })
}
export const useAddAccountMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: accountApiRequest.addEmployee,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['accounts'] })
  })
}
export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, ...body }: UpdateEmployeeAccountBodyType & { id: number }) =>
      accountApiRequest.updateEmployee(id, body),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['accounts'], exact: true })
  })
}
export const useDeleteAccountMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: accountApiRequest.deleteEmployee,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['accounts'] })
  })
}
export const useGetGuestListQuery = (queryParams: GetGuestListQueryParamsType) => {
  return useQuery({
    queryFn: () => accountApiRequest.guestList(queryParams),
    queryKey: ['guests', queryParams]
  })
}
export const useCreateGuestMutation = () => useMutation({ mutationFn: accountApiRequest.createGuest })
