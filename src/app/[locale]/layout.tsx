import AppProvider from '@/components/app-provider'
import Footer from '@/components/footer'
import GoogleTag from '@/components/google-tag'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Locale, locales } from '@/config'
import { cn } from '@/lib/utils'
import { baseOpenGraph } from '@/shared-metadata'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Inter as FontSans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
})

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
    const t = await getTranslations({ locale, namespace: 'Brand' })
    return {
        title: {
            template: `%s | ${t('title')}`,
            default: t('defaultTitle')
        },
        openGraph: {
            ...baseOpenGraph
        }
        // other: {
        //   'google-site-verification': 'KKr5Sgn6rrXntMUp1nDIoQR7mJQujE4BExrlgcFvGTg'
        // }
    }
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    unstable_setRequestLocale(locale)
    const messages = await getMessages()
    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <NextTopLoader showSpinner={false} color='hsl(var(--foreground))' />
                <NextIntlClientProvider messages={messages}>
                    <AppProvider>
                        <ThemeProvider
                            attribute='class'
                            defaultTheme='system'
                            enableSystem
                            disableTransitionOnChange
                        >
                            {children}
                            <Footer />
                            <Toaster />
                        </ThemeProvider>
                    </AppProvider>
                </NextIntlClientProvider>
                <GoogleTag />
            </body>
        </html>
    )
}
