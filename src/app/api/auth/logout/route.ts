import authApiRequest from '@/apiRequests/auth'
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
    const result = await authApiRequest.sLogout({ accessToken, refreshToken })
    return Response.json(result.payload)
  } catch (error) {
    return Response.json({ message: 'Lỗi khi gọi API đến server backend' }, { status: 200 })
  }

  // try {
  //     await authApiRequest.sLogout({ accessToken, refreshToken });
  //     const result = {}; // Assuming the result is an empty object if no value is returned
  //     if (typeof result === 'object' && (result as any).payload) {
  //         return Response.json((result as any).payload)
  //     } else {
  //         return Response.json({ message: 'No payload returned from API' }, { status: 200 })
  //     }
  // } catch (error) {
  //     return Response.json({ message: 'Lỗi khi gọi API đến server backend' }, { status: 200 })
  // }
}
