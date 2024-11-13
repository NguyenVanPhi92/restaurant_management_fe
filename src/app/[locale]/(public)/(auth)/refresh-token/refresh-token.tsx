'use client' // use client mode

import { checkAndRefreshToken, getRefreshTokenFromLocalStorage } from '@/lib/utils'
import { useRouter } from '@/navigation'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function RefreshToken() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const refreshTokenFromUrl = searchParams.get('refreshToken')
    const redirectPathname = searchParams.get('redirect')

    useEffect(() => {
        if (refreshTokenFromUrl && refreshTokenFromUrl === getRefreshTokenFromLocalStorage()) {
            checkAndRefreshToken({
                onSuccess: () => {
                    router.push(redirectPathname || '/')
                }
            })
        } else {
            router.push('/')
        }
    }, [router, refreshTokenFromUrl, redirectPathname])

    return <div>Refresh token....</div>
}
