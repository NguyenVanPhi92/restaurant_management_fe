import GuestLoginForm from '@/app/[locale]/(public)/tables/[number]/guest-login-form'
import envConfig, { Locale } from '@/config'
import { baseOpenGraph } from '@/shared-metadata'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Props = {
    params: { number: string; locale: Locale }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const t = await getTranslations({
        locale: params.locale,
        namespace: 'LoginGuest'
    })
    const url = envConfig.NEXT_PUBLIC_URL + `/${params.locale}/tables/${params.number}`

    return {
        title: `No ${params.number} | ${t('title')}`,
        description: t('description'),
        openGraph: {
            ...baseOpenGraph,
            title: `No ${params.number} | ${t('title')}`,
            description: t('description'),
            url
        },
        alternates: { canonical: url },
        robots: { index: false }
    }
}

export default function TableNumberPage() {
    return <GuestLoginForm />
}
