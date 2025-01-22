import http from '@/lib/http'

// Call API to Server
const revalidateApiRequest = (tag: string) => {
  http.get(`/api/revalidate?tag=${tag}`, { baseUrl: '' })
}
export default revalidateApiRequest
