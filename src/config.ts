import { z } from 'zod'
// File này chủ yếu để khai báo các biến môi trường và kiểm tra xem các biến môi trường đó có hợp lệ hay không

// khai báo validate biến môi trường env
const configSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string(),
    NEXT_PUBLIC_URL: z.string(),
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string(),
    NEXT_PUBLIC_GOOGLE_AUTHORIZED_REDIRECT_URI: z.string()
})

// so sánh xem env có khớp hay không
const configProject = configSchema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_AUTHORIZED_REDIRECT_URI:
        process.env.NEXT_PUBLIC_GOOGLE_AUTHORIZED_REDIRECT_URI
})

//  nếu không khớp
if (!configProject.success) {
    console.error(configProject.error.errors)
    throw new Error('Các khai báo biến môi trường không hợp lệ')
}

// export biến môi trường
const envConfig = configProject.data
export default envConfig
export type Locale = (typeof locales)[number]

export const locales = ['en', 'vi'] as const
export const defaultLocale: Locale = 'vi'
