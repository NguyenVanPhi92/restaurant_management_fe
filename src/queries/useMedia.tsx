import { mediaApiRequest } from '@/apiRequests/media'
import { useMutation } from '@tanstack/react-query'

// useQuery - Get
// useMutation: POST, PUT, DELETE
// useQueryClient: Invalidate/refresh cache when data change Ex: Add, Update, Delete
export const useUploadMediaMutation = () => useMutation({ mutationFn: mediaApiRequest.upload })
