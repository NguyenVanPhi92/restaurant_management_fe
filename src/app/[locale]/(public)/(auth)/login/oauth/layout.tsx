import { Suspense } from 'react'

// Layour Wrapper Page
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>
}
