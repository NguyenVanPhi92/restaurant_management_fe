import guestApiRequest from '@/apiRequests/guest'
import { cookies } from 'next/headers'

// Call API to Server Next.js
export async function POST(request: Request) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const refreshToken = cookieStore.get('refreshToken')?.value
  cookieStore.delete('accessToken')
  cookieStore.delete('refreshToken')
  if (!accessToken || !refreshToken) {
    return Response.json({ message: 'Không nhận được access token hoặc refresh token' }, { status: 200 })
  }
  try {
    const result: any = await guestApiRequest.sLogout({ accessToken, refreshToken })
    return Response.json(result.payload)
  } catch (error) {
    console.log(error)
    return Response.json({ message: 'Lỗi khi gọi API đến server backend' }, { status: 200 })
  }
}
