import authApiRequest from '@/apiRequests/auth'
import { HttpError } from '@/lib/http'
import { LoginBodyType } from '@/schemaValidations/auth.schema'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

// create method async
export async function POST(request: Request) {
  // as LoginBodyType: ép kiểu body khi client post lên server sẽ có kiểu LoginBodyType
  const body = (await request.json()) as LoginBodyType
  const cookieStore = cookies()

  try {
    const { payload } = await authApiRequest.sLogin(body)
    const { accessToken, refreshToken } = payload.data
    // as { exp: number }: ép kiểu dữ liệu cho exp là kiểu number
    const decodedAccessToken = jwt.decode(accessToken) as { exp: number }
    const decodedRefreshToken = jwt.decode(refreshToken) as { exp: number }
    // set cookies server
    cookieStore.set('accessToken', accessToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: decodedAccessToken.exp * 1000
    })
    cookieStore.set('refreshToken', refreshToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: decodedRefreshToken.exp * 1000
    })
    // trả vê data cho server
    return Response.json(payload)
  } catch (error) {
    error instanceof HttpError
      ? Response.json(error.payload, { status: error.status })
      : Response.json({ message: 'Có lỗi xảy ra' }, { status: 500 })
  }
}
