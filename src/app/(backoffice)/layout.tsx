import { ReactNode } from 'react'
import { BackofficeShell } from './_components'

interface BackofficeLayoutProps {
	children: ReactNode
}

export default function BackofficeLayout({ children }: BackofficeLayoutProps) {
	return <BackofficeShell>{children}</BackofficeShell>
}
